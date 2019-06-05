/* eslint-disable global-require */
import React from "react";

const MapOverlay = () => {
  // class MapOverlay extends Component {
  // 	render() {
  return (
    <div className="grid-item map-overlay">
      <img className="sample-map" src={require("../assets/map.png")} alt="" />
    </div>
  );
};

export default MapOverlay;
