import React from 'react';
import './launch-list.css'

class LaunchListData extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.selectedItems.map((obj, index) => (
					<tr key={index}>
						<td> {obj.launch_year} </td>
						<td> {obj.mission_name} </td>
						<td> {obj.launch_site_name} </td>
						<td> {obj.payload_mass_kg} </td>
						<td> {obj.land_success} </td>
					</tr>
				))}
				</tbody>
		);
	}
}

export default LaunchListData;
