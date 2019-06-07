import React from "react";
import { NavLink } from "react-router-dom";

export default function DestList() {
  // class Destlist extends Component {
  // 	render() {
  return (
    <div id="locationList" className="location-list">
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Julius Nyerere International Airport, Julius K. Nyerere Rd, Dar es
        Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Samaki Samaki, Haile Selassie Rd, Dar es Salaam
      </button>
      <button type="button" className="wide-btn dest-btn" onClick="openLoc()">
        Julius Nyerere International Airport, Julius K. Nyerere Rd, Dar es
        Salaam
      </button>
      <div className="close-dest">
        <NavLink exact to="/dash">
          <button type="button" className="dest-cls-btn" onClick="closeSld()">
            Close
          </button>
        </NavLink>
      </div>
    </div>
  );
}
