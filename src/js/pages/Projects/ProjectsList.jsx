import React from 'react';
import {connect} from 'react-redux';

import Project from 'components/Project';
import ProjectsListItem from './ProjectsListItem';
import {fetchProjects, filterProjects} from 'actions/projectActions';

@connect((store) => {
  return {
    projects: store.projects.projects,
    filter: store.projects.filter
  };
})

export default class ProjectsList extends React.Component {
    
	componentWillMount() {
	    this.props.dispatch(fetchProjects());
	}

	render() {
		let {projects, filter} = this.props;
		if(filter) {
			projects = projects.filter(function(elem) {
            	return elem.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        	});
        }
		projects = projects.map((elem) => {
			let project = new Project(elem);
			return <ProjectsListItem item={project} key={project.id}/> 
		});
		return (
			<div>
				<ul className="prj-list">
					{projects}
				</ul>
			</div>
		);
	};                       

}