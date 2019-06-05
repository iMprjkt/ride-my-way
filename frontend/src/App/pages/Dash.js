import React from "react";
import { NavLink } from "react-router-dom";

import UserAvatar from "../components/UserAvatar";
import MapOverlay from "../components/MapOverlay";
import PositionPin from "../components/PositionPin";
import DestForm from "../components/DestForm";
import "../css/app.css";

// class Dash extends React.Component {
// 	render() {
const Dash = () => {
  return (
    <div className="app-wrap">
      <NavLink exact to="/profile" className="user-avatar">
        <UserAvatar />
      </NavLink>
      <MapOverlay />
      <PositionPin />
      <DestForm />
    </div>
  );
};

export default Dash;
