import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { githubServiceBuilder } from "../helpers/github";
import {
  checkState,
  checkCode,
  withHeaders,
  makeCookieString,
  getTokenFromCookies,
  redirect,
  clonedMessage,
} from "../helpers/util";
import config from "../helpers/config";
import { CloneResponse } from "../helpers/types";

const handler: Handler = async (event: HandlerEvent, context) => {
  const response: HandlerResponse = {
    statusCode: 200,
  };

  // check for state
  // this endpoint is only to be used for cloning issues, so we should ignore everything that doesn't have state (see type for state).
  const stateOrFail = checkState(event);
  if ("statusCode" in stateOrFail) {
    return withHeaders(stateOrFail);
  }

  // check for auth token in cookies
  let token = getTokenFromCookies(event.headers);

  if (!token) {
    // check for code in query params
    // we fail hard if we don't have a token AND code
    const tokenOrFail = await checkCode(event, stateOrFail);
    if (typeof tokenOrFail !== "string") {
      return tokenOrFail;
    }

    token = tokenOrFail;

    const cookieString = makeCookieString(token);
    response.headers = {
      "Set-Cookie": cookieString,
    };
  }

  // if we have a token, we can now clone issues

  const gh = await githubServiceBuilder(token);

  const { module, sprint, issue, prevURL } = stateOrFail;

  const url = new URL(prevURL);

  // if issue is defined, we clone just that issue
  if (issue) {
    await gh.cloneIssue(module, issue).catch((err) => {
      console.error(err);
      url.searchParams.set("error", err.message);
      return redirect(url.toString());
    });

    url.searchParams.set("message", "Issue cloned successfully");

    return redirect(url.toString());
  }

  const resp = await gh.cloneAllIssues(module, sprint).catch((err) => {
    console.error(err);
    url.searchParams.set("error", err.message);
    return redirect(url.toString());
  });

  url.searchParams.set("message", clonedMessage(resp as CloneResponse));

  return redirect(url.toString());
};

export { handler };
