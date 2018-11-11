import React, { Component } from 'react';
import './launch-list.css'

class LaunchListTableHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
					<th> Launch Year </th>
					<th> Mission Name </th>
					<th> Launch Site </th>
					<th> Payload Mass (kg) </th>
					<th> Land Success
					</th>
				</tr>
			</thead>
		);
	}
}

export default LaunchListTableHeader;
