import React from 'react';
import axios from 'axios';

class LaunchList extends React.Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
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
					singleLaunch['launch_success'] = obj.launch_success.toString();
					launches.push(singleLaunch);
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
				<thead>
					<tr>
						<th> Launch Year </th>
						<th> Mission Name </th>
						<th> Launch Site </th>
						<th> Payload Mass (kg) </th>
						<th> Launch Success </th>
					</tr>
				</thead>
				<tbody>
					{this.state.items.map((obj, index) => (
						<tr key={index}>
							<td> {obj.launch_year} </td>
							<td> {obj.mission_name} </td>
							<td> {obj.launch_site_name} </td>
							<td> {obj.payload_mass_kg} </td>
							<td> {obj.launch_success} </td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default LaunchList;
