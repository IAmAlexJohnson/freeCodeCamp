import React from "react";
import ReactDOM from "react-dom";

import MarkdownPreviewer from "./components/MarkdownPreviewer";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Send Markdown Previewer to the DOM so the user can see it
ReactDOM.render(<MarkdownPreviewer />, document.getElementById("app"));
