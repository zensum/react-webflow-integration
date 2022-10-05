import React, { Component } from "react";

import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <>
        <div id="react-target" style={{ background: "red" }}>
          Test
        </div>
        <div id="react-target-2" style={{ background: "red" }}>
          Test
        </div>
      </>
    );
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target"),
  document.getElementById("react-target-2")
);
