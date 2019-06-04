import React, { Component } from 'react'

class PositionPin extends Component {
    render() {
        return (
            <div className="grid-item pin">
            <button className="btn">
              <img className="pin-location" src={require("../assets/pin.png")} />
            </button>
          </div>
        )
    }
}

export default PositionPin