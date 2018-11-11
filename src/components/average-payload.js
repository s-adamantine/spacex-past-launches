import React, { Component } from 'react';

class AveragePayload extends Component {
	constructor(props){
		super();
	}

	render() {
		var sum = this.props.selectedItems
			.map(obj => {
				return obj.payload_mass_kg
			})
			.reduce((sum, currentPayload) => {
				return sum + currentPayload
			}, 0)
		var average = Math.round(sum / this.props.selectedItems.length)
		return (
			<span>
				Average Payload:
				{average}
			</span>
		);
	}

}

export default AveragePayload;
