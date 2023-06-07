import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

// Setup on page load
window.onload = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
