import React from "react";

import DestList from "./DestList";

const Destination = () => {
  // class FormSelect extends Component {
  // 	render() {
  return (
    <div className="app-wrap">
      <div id="destination" className="dest-view">
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
    </div>
  );
};

export default Destination;