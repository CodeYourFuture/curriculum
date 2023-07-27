import React from "react";
import { API_URL } from "../const";
import useAuth from "../hooks/useAuth";
import GithubSignInButton from "./GithubSignInButton";

const AuthPage = () => {
  const { isAuthenticated, loading, error, redirectPath } = useAuth(API_URL);
  if (isAuthenticated && redirectPath) {
    window.location.href = redirectPath;
  }
  return (
    <>
      {loading && <div>Authenticating...</div>}
      {error && <div>{error}</div>}
      <GithubSignInButton.component />
    </>
  );
};

export default {
  component: AuthPage,
  selector: ".auth-page-root",
};
