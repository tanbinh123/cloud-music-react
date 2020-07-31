import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import fastclick from "fastclick"
import "assets/common/reset"
import "assets/common/border"
import "amfe-flexible/index"
fastclick.attach(document.body);
ReactDOM.render(
  <App></App>,
  document.getElementById("root")
)