import React from 'react';
import axios from 'axios';
import LaunchListTableHeader from './launch-list-table-header';

class LaunchList extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			selected_fields: {
				launch_year: '-',
				land_success: '-',
			},
		}
		this.onChangeFieldsSelected = this.onChangeFieldsSelected.bind(this);
	}

	computedFields(selected_fields) {
		return this.state.items.filter(obj => {
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

	// GET request to the spacexdata api, grab out all the required data and store
	// it in an array.
	componentWillMount() {
		var launches = [];
		axios.get('https://api.spacexdata.com/v3/launches/past')
			.then((req) => {
				this.setState({"items": req.data});
				req.data.forEach(obj => {
					var singleLaunch = {};
					singleLaunch['launch_year'] = obj.launch_year;
					singleLaunch['mission_name'] = obj.mission_name;
					singleLaunch['launch_site_name'] = obj.launch_site.site_name_long;
					singleLaunch['payload_mass_kg'] = obj.rocket.second_stage.payloads[0].payload_mass_kg;
					singleLaunch['land_success'] = String(obj.rocket.first_stage.cores[0].land_success);
					launches = [...launches, singleLaunch];
				})
				this.setState({"items": launches});
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<table>
				<LaunchListTableHeader
					fields={this.state.items}
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
