import React, { Component } from "react";

import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div id="react-target-second">
        <div style={{ background: "pink" }}>This is another app</div>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target-second")
);
