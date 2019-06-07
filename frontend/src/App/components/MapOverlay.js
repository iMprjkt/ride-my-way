/* eslint-disable global-require */
import React from "react";

export default function MapOverlay() {
  // class MapOverlay extends Component {
  // 	render() {
  return (
    <div className="grid-item map-overlay">
      <img className="sample-map" src={require("../assets/map.png")} alt="" />
    </div>
  );
}
