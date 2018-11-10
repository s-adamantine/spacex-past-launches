import React from 'react';
import axios from 'axios';
import LaunchListTableHeader from './launch-list-table-header';

class LaunchList extends React.Component {
	constructor() {
		super();
		this.state = {
			selected_fields: {
				launch_year: '-',
				land_success: '-',
			},
		}
		this.onChangeFieldsSelected = this.onChangeFieldsSelected.bind(this);
	}

	computedFields(selected_fields) {
		return this.props.items.filter(obj => {
			if (selected_fields.land_success === '-'
				&& selected_fields.launch_year === '-') {
					return obj;
			} else if (selected_fields.land_success === '-') {
				return obj.launch_year === selected_fields.launch_year;
			} else if (selected_fields.launch_year === '-') {
				return obj.land_success === selected_fields.land_success;
			} else {
				return (obj.land_success === selected_fields.land_success
					&& obj.launch_year === selected_fields.launch_year)
			}
		})
	}

	onChangeFieldsSelected(selectedFields) {
		this.setState({
			selected_fields: {
				launch_year: selectedFields.launch_year,
				land_success: selectedFields.land_success,
			}
		}, () => console.log(this.state))
	}

	render() {
		return (
			<table>
				<LaunchListTableHeader
					fields={this.props.items}
					onChangeFieldsSelected={this.onChangeFieldsSelected}/>
				<tbody>
					{this.computedFields(this.state.selected_fields).map((obj, index) => (
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
