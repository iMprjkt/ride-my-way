/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import LoginForm from "./LoginForm";

export default function LoginHeader() {
  return (
    <div className="login">
      <input
        id="signin"
        type="radio"
        name="tab"
        className="sign-in"
        defaultChecked
      />
      <label htmlFor="signin" className="tab">
        Sign In
      </label>
      <input id="signup" type="radio" name="tab" className="sign-up" />
      <label htmlFor="signup" className="tab">
        Sign Up
      </label>
      <LoginForm />
    </div>
  );
}
