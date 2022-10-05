import React, { Component } from "react";
import test from "./test";

import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <>
        <div id="react-target" style={{ background: "blue" }}>
         CHANGED
				<test/>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target"),
);
