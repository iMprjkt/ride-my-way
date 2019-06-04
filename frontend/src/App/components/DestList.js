import React, { Component } from "react";

class DestList extends Component {
  render() {
    return (
      <div id="locationList" className="location-list">
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Julius Nyerere International Airport, Julius K. Nyerere Rd, Dar es
          Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <button className="wide-btn dest-btn" onclick="openLoc()">
          Samaki Samaki, Haile Selassie Rd, Dar es Salaam
        </button>
        <div className="close-dest">
          <button className="dest-cls-btn" onclick="closeSld()">
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default DestList
