import React, { Component } from "react"
import DestList from './DestList'

class DestSlider extends Component {
  render() {
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
          <button className="location-btn" onclick="openSld()">
            Go
          </button>
        </div>
        <DestList />
      </div>
    )
  }
}

export default DestSlider
