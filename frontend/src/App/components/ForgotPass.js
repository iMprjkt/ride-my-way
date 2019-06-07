/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPass() {
  return (
    <div className="app-wrap">
      <div className="form-wrap">
        <NavLink exact to="/">
          <button type="button" className="x-cls-btn">
            &times;
          </button>
        </NavLink>
        <header className="info">
          <h1 className="user">Account recovery</h1>
          <p>Please enter the registered email</p>
        </header>
        <form className="input-form">
          <div className="wrapper">
            <label htmlFor="codeInput" className="input-label">
              Registered Email Address
              <input
                className="input"
                id="codeInput"
                type="value"
                name="code"
                placeholder="Enter Email"
                required
              />
            </label>
          </div>
          <div className="wrapper">
            <NavLink exact to="/">
              <button className="send-btn" type="submit" name="button">
                Send
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
