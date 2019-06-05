/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  // class FormSelect extends Component {
  // 	render() {
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
      <div className="login-form">
        <div className="signin-form">
          <div className="wrapper">
            <label htmlFor="user" className="label">
              Username
              <input
                id="user"
                type="text"
                className="input"
                placeholder="Username"
              />
            </label>
          </div>
          <div className="wrapper">
            <label htmlFor="pass" className="label">
              Password
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="wrapper">
            <input id="check" type="checkbox" className="check" />
            <label htmlFor="check">
              <span className="icon" />
              Keep me signed in
            </label>
          </div>
          <div className="wrapper">
            <NavLink exact to="/dash">
              <button type="button" className="button">
                Sign in
              </button>
            </NavLink>
          </div>
          <div className="hr" />
          <div className="footer">
            <NavLink exact to="/">
              <div className="login-link">Forgot Password</div>
            </NavLink>
          </div>
        </div>
        <div className="signup-form">
          <div className="wrapper">
            <label htmlFor="user" className="label">
              Username
              <input
                id="user"
                type="text"
                className="input"
                placeholder="Username"
              />
            </label>
          </div>
          <div className="wrapper">
            <label htmlFor="pass" className="label">
              Password
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="wrapper">
            <label htmlFor="pass" className="label">
              Repeat Password
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
                placeholder="Repeat password"
              />
            </label>
          </div>
          <div className="wrapper">
            <label htmlFor="pass" className="label">
              Email Address
              <input
                id="pass"
                type="text"
                className="input"
                placeholder="Email Address"
              />
            </label>
          </div>
          <div className="wrapper">
            <NavLink exact to="/dash">
              <button type="button" className="button">
                Sign Up
              </button>
            </NavLink>
          </div>
          <div className="hr" />
          <div className="footer">
            <p>
              Already a member?
              <NavLink exact to="/" className="login-link">
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
