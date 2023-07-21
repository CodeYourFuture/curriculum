import React from "react";
import { cloneIssue, useAuthentication } from "coursework-helper-ui";
import { API_URL } from "../const";
import toast, { Toaster } from "react-hot-toast";
import GithubSignInButton from "./GithubSignInButton";

const successText = (data) => {
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

const CloneButton = ({ module, issue, sprint }) => {
  const { isAuthenticated, token } = useAuthentication(API_URL);

  const clone = () => {
    toast.promise(cloneIssue(API_URL, token, module, sprint, issue), {
      loading: "Cloning...",
      success: (data) => {
        return successText(data);
      },
      error: (err) => {
        return `Failed to clone issues: ${err}`;
      },
    });
  };

  if (!isAuthenticated) {
    return <GithubSignInButton.component />;
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
