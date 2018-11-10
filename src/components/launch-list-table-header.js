import React, { Component } from 'react';

class LaunchListTableHeader extends Component {
	constructor(props) {
		super();
		this.state = {};
		this.selectedYear = this.selectedYear.bind(this);
		this.selectedSuccess = this.selectedSuccess.bind(this)
	}

	selectedYear(e) {
		this.setState({
			"selected_year": e.target.value,
		})
	}

	selectedSuccess(e) {
		this.setState({
			"launch_success": e.target.value,
		}, () => {
			this.props.onChangeFieldsSelected(this.state.launch_success);
		})
	}

	render() {
		var launch_years = [...new Set(this.props.fields.map(item => item.launch_year))];
		return (
			<thead>
				<tr>
					<th>
						Launch Year
						<div>
							<select onChange={this.selectedYear}>
								<option defaultValue="-"> - </option>
								{launch_years.map((year, index) => (
									<option key={index} value={year}>{year}</option>
								))
								}
							</select>
						</div>
					</th>
					<th>
						Mission Name
					</th>
					<th> Launch Site </th>
					<th> Payload Mass (kg) </th>
					<th> Launch Success
						<div>
							<select onChange={this.selectedSuccess}>
								<option defaultValue value="-"> - </option>
								<option value="true"> true </option>
								<option value="false"> false </option>
							</select>
						</div>
					</th>
				</tr>
			</thead>
		);
	}
}

export default LaunchListTableHeader;
