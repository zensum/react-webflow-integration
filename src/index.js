import React, { Component } from 'react'

import ReactDOM from 'react-dom'

class App extends Component {
	render() {
		return (
			<div>Test</div>
		)
	}
}

ReactDOM.render(
	React.createElement(App, {}, null),
	document.getElementById('react-target')
);