import React from 'react';
import LaunchList from './launch-list';

class LaunchListContainer extends React.Component {

	render() {
		return (
			<div style={{
				"border": "dotted black",
				"borderWidth": "1px",
				"borderRadius": "7px",
				"height": "750px",
				"width": "100%",
				"overflowY": "scroll",
				}}>
					<LaunchList />
				</div>
		);
	}

}

export default LaunchListContainer;
