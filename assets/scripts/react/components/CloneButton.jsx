import React from "react";
import { API_URL, CLIENT_ID } from "../const";
import toast, { Toaster } from "react-hot-toast";
import { githubLoginUrl, cloneSuccessText } from "../helpers";
import useAuth from "../hooks/useAuth";

export async function cloneIssue(module, sprint, issue) {
  // Construct the URL based on the provided module and optional issue number
  const url = issue
    ? new URL(`${API_URL}/github/clone/${module}/${issue}`)
    : new URL(`${API_URL}/github/clone/${module}`);

  // If a sprint parameter is provided, append it to the URL's search parameters
  if (sprint) {
    url.searchParams.append("sprint", sprint);
  }

  // Make a POST request to the constructed URL with the required headers
  return fetch(url, {
    method: "POST",
    credentials: "include",
  })
    .then((res) => {
      if (res.status === 401) {
        window.location.href = githubLoginUrl(CLIENT_ID);
      }
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.error); // Throw an error if the response contains an error property
      }
      return data; // Return the data if no error occurred
    });
}

const CloneButton = ({ module, issue, sprint }) => {
  const { isAuthenticated } = useAuth(API_URL);

  const clone = () => {
    toast.promise(cloneIssue(module, sprint, issue), {
      loading: "Cloning...",
      success: (data) => {
        return cloneSuccessText(data);
      },
      error: (err) => {
        console.log({ err });
        return `Failed to clone issues: ${err}`;
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <a href={githubLoginUrl(CLIENT_ID)} className="e-button">
        Login
      </a>
    );
  }

  return (
    <div>
      <button onClick={clone} className="e-button">
        {issue ? "Clone Issue" : "Clone All Issues"}
      </button>
      <Toaster />
    </div>
  );
};

export default {
  component: CloneButton,
  selector: ".clone-button-root",
};
