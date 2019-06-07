/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Verify extends React.Component {
  putCode(valid) {
    valid.preventDefault();
    if (this.authUser(this.code.value)) {
      this.props.history.push("/dash");
    } else {
      console.log("Wrong code");
    }
  }

  authUser(code) {
    if (code === "1029384RID1") {
      return true;
    }
  }

  render() {
    return (
      <div className="app-wrap">
        <div className="verify">
          <NavLink exact to="/">
            <button type="button" className="x-cls-btn">
              &times;
            </button>
          </NavLink>
          <header className="verify">
            <h1 className="user">User verification</h1>
            <p>Please enter the verification code sent to your email address</p>
          </header>
          <form
            className="verify-form"
            ref={input => (this.signInForm = input)}
            onSubmit={valid => {
              this.putCode(valid);
            }}
          >
            <div className="wrapper">
              <label htmlFor="codeInput" className="verify-label">
                Verification code
                <input
                  className="input"
                  id="codeInput"
                  type="value"
                  name="code"
                  placeholder="Verification code"
                  ref={input => (this.code = input)}
                  required
                />
              </label>
            </div>
            <div className="wrapper">
              <button className="verify-btn" type="submit" name="button">
                Sign in
              </button>
            </div>
          </form>
          <div className="creds">
            <h4>Testing details</h4>
            <h4>code: 1029384RID1</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Verify);
