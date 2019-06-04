import React, { Component } from 'react'

class UserLinks extends Component {
    render() {
        return (
            <div id="userLinks" className="user-links">
            <button className="wide-btn user-links-btn" onclick="openLoc()">
              Past Rides
            </button>
            <button className="wide-btn user-links-btn" onclick="openLoc()">
              Requested Rides
            </button>
          </div>
        )
    }
}

export default UserLinks