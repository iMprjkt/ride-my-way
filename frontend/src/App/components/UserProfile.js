import React, { Component } from "react";
import UserLinks from './UserLinks'

class UserProfile extends Component {
  render() {
    return (
      <div id="userProfile" className="side-nav">
        <button className="sidenav-cls-btn" onclick="closeNav()">
        &times;
        </button>
        <header className="user">
          <img className="user-avatar" src={require("../assets/avatar.png")} />
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
          <button className="signout-btn" onclick="location.href='index.html'">
            Sign out
          </button>
        </div>
      </div>
    );
  }
}

export default UserProfile
