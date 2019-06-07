/* eslint-disable global-require */
import React from "react";

export default function UserAvatar() {
  // class UserAvatar extends React.Component {
  // 	render() {
  return (
    <div id="userAvatar" className="grid-item user">
      <button type="button" className="user-btn" onClick="openNav()">
        <img className="avatar" src={require("../assets/avatar.png")} alt="" />
      </button>
    </div>
  );
}
