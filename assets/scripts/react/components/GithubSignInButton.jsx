import React from "react";
import { SignInButton } from "coursework-helper-ui";
import { API_URL, CLIENT_ID } from "../const";

const GithubSignInButton = () => {
  return (
    <SignInButton
      clientId={CLIENT_ID}
      apiUrl={API_URL}
      classNames={{
        signInButton: "e-button",
        signOutButton: "e-button",
      }}
    />
  );
};

export default {
  component: GithubSignInButton,
  selector: ".github-sign-in-button-root",
};
