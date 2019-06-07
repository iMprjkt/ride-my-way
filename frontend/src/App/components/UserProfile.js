/* eslint-disable global-require */
import React from "react";
import { NavLink } from "react-router-dom";

import UserLinks from "./UserLinks";

// class UserProfile extends React.Component {
// 	render() {
export default function UserProfile() {
  return (
    <div className="app-wrap">
      <div id="userProfile" className="side-nav">
        <NavLink exact to="/dash">
          <button
            type="button"
            className="sidenav-cls-btn"
            onClick="closeNav()"
          >
            &times;
          </button>
        </NavLink>
        <header className="user">
          <img
            className="user-avatar"
            src={require("../assets/avatar.png")}
            alt=""
          />
          <h1 className="user">Michael Angelo</h1>
        </header>
        <div className="ride-given">
          <h2 className="ride-given">34</h2>
          <p className="ride-given">Rides Given</p>
        </div>
        <div className="ride-taken">
          <h2 className="ride-taken">55</h2>
          <p className="ride-taken">Rides Taken</p>
        </div>
        <UserLinks />
        <div className="sign-out">
          <NavLink exact to="/">
            <button
              type="button"
              className="signout-btn"
              onClick="location.href='index.html'"
            >
              Sign out
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
