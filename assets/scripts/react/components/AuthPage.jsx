import React from "react";
import { RedirectWithTimeout, useAuthentication } from "coursework-helper-ui";
import { API_URL } from "../const";
import GithubSignInButton from "./GithubSignInButton";

const AuthPage = () => {
  const { isAuthenticated, loading, error, redirectPath } =
    useAuthentication(API_URL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Couldn't authenticate: {error}</div>;

  return (
    isAuthenticated && (
      <>
        <div>Authenticated!</div>
        <RedirectWithTimeout to={redirectPath || "/"} />
        <GithubSignInButton.component />
      </>
    )
  );
};

export default {
  component: AuthPage,
  selector: ".auth-page-root",
};
