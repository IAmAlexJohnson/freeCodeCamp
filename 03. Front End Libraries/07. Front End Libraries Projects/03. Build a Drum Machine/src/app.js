import React from "react";
import ReactDOM from "react-dom";

import DrumMachine from "./components/DrumMachine";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Send Markdown Previewer to the DOM so the user can see it
ReactDOM.render(<DrumMachine />, document.getElementById("app"));
