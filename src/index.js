import React, { Component } from "react";
import Test from "./test";

import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div id="react-target">
        <div style={{ background: "yellow" }}>
          CHANGED AGAIN LOL
          <Test />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
