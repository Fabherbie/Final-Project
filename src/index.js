import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
