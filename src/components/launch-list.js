import React from 'react';
import axios from 'axios';
import LaunchListTableHeader from './launch-list-table-header';

class LaunchList extends React.Component {
	render() {
		return (
			<table>
				<LaunchListTableHeader/>
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
			</table>
		);
	}
}

export default LaunchList;
