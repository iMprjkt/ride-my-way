/* eslint-disable global-require */
import React from "react";

// class PositionPin extends React.Component {
// 	render() {
const PositionPin = () => {
  return (
    <div className="grid-item pin">
      <button type="button" className="btn">
        <img
          className="pin-location"
          src={require("../assets/pin.png")}
          alt=""
        />
      </button>
    </div>
  );
};

export default PositionPin;