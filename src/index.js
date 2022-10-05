import React, { Component } from 'react'

import ReactDOM from 'react-dom'

class App extends Component {
	render() {
		return (
			<div>
				<h1>Testing page</h1>
				<div id="offer-template" style="display: grid; grid-template-columns: auto auto auto auto auto auto auto auto; grid-template-rows: auto auto;">
					<img id="partner-logo" style="grid-row: 1 / 3; grid-column: 1 / 3;" height="80" />
					<span id="partner-name" style="grid-row: 1; grid-column: 3 / 6;">
						Långivare partnerName
					</span>
					<span id="offer-amount" style="grid-row: 2; grid-column: 3 / 6;">
						Lånebelopp offerAmount
					</span>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	React.createElement(App, {}, null),
	document.getElementById('react-target')
);