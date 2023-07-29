export const githubLoginUrl = (clientID, scopes) => {
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.append("client_id", clientID);
  url.searchParams.append(
    "state",
    JSON.stringify({ prevPath: location.pathname })
  );
  url.searchParams.append(
    "scope",
    ["project", "repo"].concat(scopes || []).join(" ")
  );
  return url.toString();
};

export const cloneSuccessText = (data) => {
  let text = "";
  const count = data.total - data.skipped;
  if (data.total > 0) {
    text += `Cloned ${count} issue${count > 1 ? "s" : ""}!`;
  }
  if (data.skipped > 0) {
    text += ` Skipped ${data.skipped} issue${data.skipped > 1 ? "s" : ""}.`;
  }
  return text;
};

const createFetch = () => {
  const hash = {};

  return (url, opts) => {
    if (!hash[url]) {
      hash[url] = fetch(url, opts);
    }

    return hash[url];
  };
};

export const hashedFetch = createFetch();
