import React, { Component } from 'react'

class MapOverlay extends Component {
    render() {
        return (
            <div className="grid-item map-overlay">
            <img className="sample-map" src={require("../assets/map.png")} />
          </div>
        )
    }
}

export default MapOverlay