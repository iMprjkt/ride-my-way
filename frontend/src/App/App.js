import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/main.css";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import UserAvatar from "./components/UserAvatar";
import MapOverlay from "./components/MapOverlay";
import PositionPin from "./components/PositionPin";
import Destination from "./components/Destination";
import UserProfile from "./components/UserProfile";
import Verify from "./components/Verify";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dash" component={Dash} />
      <Route path="/user" component={UserAvatar} />
      <Route path="/map" component={MapOverlay} />
      <Route path="/pin" component={PositionPin} />
      <Route path="/dest" component={Destination} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/verify" component={Verify} />
    </Switch>
  );
}
