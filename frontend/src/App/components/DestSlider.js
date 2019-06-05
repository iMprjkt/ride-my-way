import React from "react";

import DestList from "./DestList";

const DestSlider = () => {
  // class FormSelect extends Component {
  // 	render() {
  return (
    <div id="destinationSlider" className="bottom-slider">
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
        <button type="button" className="location-btn" onClick="openSld()">
          Go
        </button>
      </div>
      <DestList />
    </div>
  );
};

export default DestSlider;
