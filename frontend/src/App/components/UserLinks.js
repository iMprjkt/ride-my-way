import React from "react";

// class UserLinks extends React.Component {
// 	render() {
const UserLinks = () => {
  return (
    <div id="userLinks" className="user-links">
      <button
        type="button"
        className="wide-btn user-links-btn"
        onClick="openLoc()"
      >
        Past Rides
      </button>
      <button
        type="button"
        className="wide-btn user-links-btn"
        onClick="openLoc()"
      >
        Requested Rides
      </button>
    </div>
  );
};

export default UserLinks;