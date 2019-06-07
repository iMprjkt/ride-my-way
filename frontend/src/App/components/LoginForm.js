/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  signIn(valid) {
    valid.preventDefault();
    if (this.authUser(this.email.value, this.password.value)) {
      this.props.history.push("/dash");
    } else {
      console.log("Try again");
    }
  }

  authUser(email, password) {
    if (email === "michael@ridemy.way" && password === "verystrong") {
      return true;
    }
  }

  render() {
    return (
      <div className="login-form">
        <form
          className="signin-form"
          ref={input => (this.signInForm = input)}
          onSubmit={valid => {
            this.signIn(valid);
          }}
        >
          <div className="wrapper">
            <label htmlFor="loginInput" className="label">
              Email
              <input
                className="input"
                // id="loginInput"
                type="email"
                name="user"
                placeholder="Email"
                ref={input => (this.email = input)}
                required
              />
            </label>
          </div>
          <div className="wrapper">
            <label htmlFor="loginPassword" className="label">
              Password:
              {" "}
              <input
                id="loginPassword"
                ref={input => (this.password = input)}
                type="password"
                className="input"
                data-type="password"
                name="password"
                placeholder="Password"
                required
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
            <button className="button" type="submit" name="button">
              Sign in
            </button>
          </div>
          <div className="hr" />
          <div className="footer">
            <NavLink exact to="/">
              <div className="login-link">Forgot Password</div>
            </NavLink>
          </div>
          <div className="creds">
            <h4>Testing details</h4>
            <h4>email: michael@ridemy.way</h4>
            <h4>password: verystrong</h4>
          </div>
        </form>
        <form className="signup-form">
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
                // id="signUpPass"
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
                // id="signupPassVer"
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
                // id="signupEmail"
                type="text"
                className="input"
                placeholder="Email Address"
              />
            </label>
          </div>
          <div className="wrapper">
            <NavLink exact to="/verify">
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
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
