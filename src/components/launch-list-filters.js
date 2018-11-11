import React, { Component } from 'react';

class LaunchListFilters extends Component {
	constructor(props) {
		super();
		this.state = {
			launch_year: '-',
			land_success: '-',
		};
		this.selectedYear = this.selectedYear.bind(this);
		this.selectedSuccess = this.selectedSuccess.bind(this)
	}

	selectedYear(e) {
		this.setState({
			"launch_year": e.target.value,
		}, () => {
			this.props.onChangeFieldsSelected(this.state);
		})
	}

	selectedSuccess(e) {
		this.setState({
			"land_success": e.target.value,
		}, () => {
			this.props.onChangeFieldsSelected(this.state);
		})
	}

	render() {
		// Grab out all the possible filter values
		var launch_years = [...new Set(this.props.fields.map(item => item.launch_year))];
		var landing_successes = [...new Set(this.props.fields.map(item => item.land_success))];

		return (
			<div>
				Filter by:
				<select onChange={this.selectedYear}>
					<option defaultValue="-" value="-"> Launch Year </option>
					{launch_years.map((year, index) => (
						<option key={index} value={year}>{year}</option>
					))
					}
				</select>
				<select onChange={this.selectedSuccess}>
					<option defaultValue value="-"> Landing Success </option>
					{landing_successes.map((value, index) => (
						<option value={value}> {value} </option>
					))}
				</select>
			</div>
		);
	}

}

export default LaunchListFilters;
