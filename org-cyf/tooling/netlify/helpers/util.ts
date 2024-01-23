import { HandlerEvent, HandlerResponse } from "@netlify/functions";
import { auth } from "./github";
import cookie from "cookie";
import config from "./config";
import { CloneResponse, RequestState } from "./types";
import { htmlRedirect } from "./templates";
import { COOKIE_NAME, DEFAULT_HEADERS } from "./const";

export const checkState = (
  event: HandlerEvent
): RequestState | HandlerResponse => {
  if (!event.queryStringParameters || !event.queryStringParameters.state) {
    return {
      statusCode: 400,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "text/html",
      },
      body: htmlRedirect(
        "/",
        4000,
        "Hello wanderer! You should not come here without state. Redirecting you to the homepage.."
      ),
    };
  }
  const state = JSON.parse(event.queryStringParameters.state) as RequestState;

  if (!state.module) {
    return {
      statusCode: 400,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "text/html",
      },
      body: htmlRedirect(
        state.prevPath || "/",
        4000,
        "State must have a module (github repo) to copy issues from. Redirecting you back to where you were.."
      ),
    };
  }

  return state;
};

export const checkCode = async (
  event: HandlerEvent,
  state: RequestState
): Promise<string | HandlerResponse> => {
  if (event.queryStringParameters && !event.queryStringParameters.code) {
    // start auth flow, redirect to github auth page
    console.log("redirecting to github auth page");
    const redirectUrl = githubLoginUrl(state);
    return {
      statusCode: 200,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "text/html",
      },
      body: htmlRedirect(redirectUrl),
    };
  }

  const authResp = await auth({
    type: "oauth-user",
    code: event.queryStringParameters?.code || "",
  }).catch((error) => {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  });

  if ("statusCode" in authResp) {
    return authResp;
  }

  return authResp.token;
};

export const redirect = (url: string): HandlerResponse =>
  withHeaders({
    statusCode: 200,
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "text/html",
    },
    body: htmlRedirect(url),
  });

/**
 * Receives token from cookies
 * @param  {HandlerEvent["headers"]} headers - Headers object
 * @return {string} - The token value
 */
export function getTokenFromCookies(headers: HandlerEvent["headers"]): string {
  if (
    headers === null ||
    headers === undefined ||
    headers.cookie === undefined
  ) {
    return "";
  }

  // Split a cookie string in an array (Originally found http://stackoverflow.com/a/3409200/1427439)
  const cookieMap = {},
    rc = headers.cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      const parts = cookie.split("=");
      const key = parts?.shift()?.trim();
      const value = decodeURI(parts.join("="));
      if (key) {
        cookieMap[key] = value;
      }
    });

  return cookieMap[COOKIE_NAME];
}

export const makeCookieString = (value: string): string =>
  cookie.serialize(COOKIE_NAME, value, {
    secure: true,
    httpOnly: true,
    domain: config().domain,
    expires: new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000),
  });

export const withHeaders = (response: HandlerResponse): HandlerResponse => {
  response.headers = {
    ...response.headers,
    ...DEFAULT_HEADERS,
  };

  return response;
};

const githubLoginUrl = (state?: RequestState, scopes?: string[]): string => {
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.append("client_id", config().github.oauth.clientId);
  url.searchParams.append("state", JSON.stringify(state));
  url.searchParams.append(
    "scope",
    ["project", "repo"].concat(scopes || []).join(" ")
  );
  return url.toString();
};

export const clonedMessage = (resp: CloneResponse): string => {
  const { total, failed, skipped } = resp;

  let res = "";

  const plural = (n: number) => (n === 1 ? "issue" : `issues`);

  if (total === 0) {
    res = "Could not clone any issues.";
  }

  if (failed > 0) {
    res += ` Failed to clone ${failed} ${plural(failed)}.`;
  }

  if (skipped > 0) {
    res += ` Skipped ${skipped} ${plural(skipped)}.`;
  }

  return res;
};
