import { useState, useEffect } from "react";

const useAuth = (apiURL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const queryParameters = new URLSearchParams(window.location.search);

  const code = queryParameters.get("code");
  const state = queryParameters.get("state")
    ? JSON.parse(queryParameters.get("state") || "")
    : null;

  useEffect(() => {
    // If already authenticated or no code is present, stop loading and return
    if (isAuthenticated || !code) {
      setLoading(false);
      return;
    }

    // Authenticate using the provided code
    fetch(`${apiURL}/auth?code=${code}`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const signOut = async () => {
    return fetch(`${apiURL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
        return data;
      });
  };

  return {
    loading,
    error,
    isAuthenticated,
    signOut,
    redirectPath: state?.prevPath,
  };
};

export default useAuth;
