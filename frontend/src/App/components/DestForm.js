import React from "react";
import { NavLink } from "react-router-dom";

const DestForm = () => {
  // class FormSelect extends Component {
  // 	render() {
  return (
    <div id="destinationSlider" className="dest-view">
      <div className="greeting">
        <h2 className="greeting-heading">Hi, Michael Angelo</h2>
      </div>
      <div id="destinationInput" className="destination-input">
        <input
          id="locationInput"
          type="text"
          className="input"
          placeholder="Where are you going?"
        />
        <NavLink exact to="/dest">
          <button type="button" className="location-btn" onClick="openSld()">
            Go
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DestForm;
