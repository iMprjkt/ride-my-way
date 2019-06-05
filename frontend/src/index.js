import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App/App";

import * as serviceWorker from "./serviceWorker";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
