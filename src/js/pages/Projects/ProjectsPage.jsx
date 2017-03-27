import React from 'react';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';
import BodyBody from 'layout/Body/BodyBody';


import ProjectsPageBodyHeader from './ProjectsPageBodyHeader';
import ProjectsList from './ProjectsList';

export default class ProjectsPage extends React.Component {
	
	constructor() {
		super();
		this.state = {};
	};

	handleFilter(value) {
		this.state.handler(value);
	}
            
	render() {
		const {project} = this.props.params;
		const {query} = this.props.location;
		const {from, to} = query;
		return (
			<SingleColumnBody>
				<BodyHeader>
					<ProjectsPageBodyHeader onFilter={this.handleFilter.bind(this)}/>	
				</BodyHeader>
				<BodyBody>
					<ProjectsList onFilter={function(handler){
							console.log(handler);
							this.state.handler = handler;
						}.bind(this)} />
				</BodyBody>
			</SingleColumnBody>
		);
	};                       

}