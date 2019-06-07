import React from "react";

// class UserLinks extends React.Component {
// 	render() {
export default function UserLinks() {
  return (
    <div id="userLinks" className="user-links">
      <button type="button" className="wide-btn user-links-btn">
        Past Rides
      </button>
      <button type="button" className="wide-btn user-links-btn">
        Requested Rides
      </button>
    </div>
  );
}
