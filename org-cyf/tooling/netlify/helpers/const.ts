import config from "./config";

export const GITHUB_DEFAULT_LABELS = [
  "bug",
  "documentation",
  "duplicate",
  "enhancement",
  "good first issue",
  "help wanted",
  "invalid",
  "question",
  "wontfix",
];

export const COOKIE_NAME = "github-token";

export const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": config().domain,
  "Access-Control-Allow-Credentials": true,
};
