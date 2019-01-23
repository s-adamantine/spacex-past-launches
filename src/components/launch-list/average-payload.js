import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
		var average = this.props.selectedItems.length === 0 ? 0 : Math.round(sum / this.props.selectedItems.length)
		return (
			<span style={{
				"float": "right"
			}}>
				Average Payload: <Button>{average} kg</Button>
			</span>
		);
	}

}

export default AveragePayload;
