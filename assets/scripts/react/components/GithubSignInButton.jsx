import React from "react";
import useAuth from "../hooks/useAuth";
import { API_URL, CLIENT_ID } from "../const";
import toast, { Toaster } from "react-hot-toast";
import { githubLoginUrl } from "../helpers";

const GithubSignInButton = () => {
  const { isAuthenticated, signOut } = useAuth(API_URL);

  const onLogout = () => {
    toast.promise(signOut(), {
      loading: "Logging you out...",
      success: (data) => {
        return data.message;
      },
      error: (err) => {
        return `Failed to logout: ${err}`;
      },
    });
  };

  return isAuthenticated ? (
    <button onClick={onLogout} className="e-button">
      Logout
      <Toaster />
    </button>
  ) : (
    <a href={githubLoginUrl(CLIENT_ID)} className="e-button">
      Login
    </a>
  );
};

export default {
  component: GithubSignInButton,
  selector: ".github-sign-in-button-root",
};
