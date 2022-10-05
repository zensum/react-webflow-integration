import React, { Component } from "react";

import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <div style={{ background: "red" }}>Test</div>;
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
