import React from 'react';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';
import BodyBody from 'layout/Body/BodyBody';


import ProjectsPageBodyHeader from './ProjectsPageBodyHeader';
import ProjectsList from './ProjectsList';

export default class ProjectsPage extends React.Component {
            
	render() {
		const {query} = this.props.location;
		const {from, to} = query;
		return (
			<SingleColumnBody>
				<BodyHeader>
					<ProjectsPageBodyHeader />	
				</BodyHeader>
				<BodyBody>
					<ProjectsList />
				</BodyBody>
			</SingleColumnBody>
		);
	};                       

}