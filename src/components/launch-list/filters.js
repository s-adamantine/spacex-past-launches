import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

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

	selectedYear(selected) {
		this.setState({
			"launch_year": selected
		}, () => {
			this.props.onChangeFieldsSelected(this.state);
		})
	}

	selectedSuccess(selected) {
		this.setState({
			"land_success": selected,
		}, () => {
			this.props.onChangeFieldsSelected(this.state);
		})
	}

	render() {
		// Grab out all the possible filter values
		var launch_years = [...new Set(this.props.fields.map(item => item.launch_year))];
		var landing_successes = [...new Set(this.props.fields.map(item => item.land_success))];

		return (
			<span>
				<span className="filter-element">
					Filter by
				</span>
				<span className="filter-element">
					<DropdownButton
						bsStyle="default"
						title="Launch Year"
						id="dropdown-size-large"
						onSelect={this.selectedYear}>
							<MenuItem defaultValue="-" eventKey="-"> - </MenuItem>
							{launch_years.map((year, index) => (
								<MenuItem key={index} eventKey={year}>{year}</MenuItem>
							))
							}
					</DropdownButton>
				</span>
				<span className="filter-element">
					<DropdownButton
						bsStyle="default"
						title="Landing Success"
						id="dropdown-size-large"
						onSelect={this.selectedSuccess}>
						<MenuItem defaultValue="-" eventKey="-"> - </MenuItem>
						{landing_successes.map((value, index) => (
							<MenuItem key={index} eventKey={value}> {value} </MenuItem>
						))}
					</DropdownButton>
				</span>
			</span>
		);
	}

}

export default LaunchListFilters;
