import React from "react";
import { API_URL, CLIENT_ID } from "../const";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { githubLoginUrl } from "../helpers";

const AuthPage = () => {
  const { isAuthenticated, loading, error, redirectPath, signOut } =
    useAuth(API_URL);

  if (isAuthenticated && redirectPath) {
    window.location.href = redirectPath;
  }

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

  return (
    <>
      {loading && <div>Authenticating...</div>}
      {error && <div>{error}</div>}
      {isAuthenticated ? (
        <button onClick={onLogout} className="e-button">
          Logout
          <Toaster />
        </button>
      ) : (
        <a href={githubLoginUrl(CLIENT_ID)} className="e-button">
          Login
        </a>
      )}
    </>
  );
};

export default {
  component: AuthPage,
  selector: ".auth-page-root",
};
