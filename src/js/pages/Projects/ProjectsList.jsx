import React from 'react';

import ProjectsListItem from './ProjectsListItem';
import {ProjectStore} from 'stores';
import * as ProjectListActions from 'actions/ProjectListActions';
import Project from 'components/Project';

export default class ProjectsList extends React.Component {

	constructor() {
		super();
		this.state = getStateFromStore();
		this._onChangeListener = this._onChange.bind(this);
	}

	componentWillMount() {
		ProjectStore.addChangeListener(this._onChangeListener);
		ProjectListActions.loadProjects();
	};

	componentDidMount() {
        
    };

	handleFilter(expr) {
		let projects = getStateFromStore().projects.filter(function(elem) {
            return elem.title.toLowerCase().indexOf(expr.toLowerCase()) !== -1;
        });

        this.setState({projects});
	};
            
	render() {
		this.props.onFilter(this.handleFilter.bind(this));
		let projects = this.state.projects.map((elem) => <ProjectsListItem item={elem} key={elem.id}/>);
		return (
			<div>
				<ul className="prj-list">
					{projects}
				</ul>
			</div>
		);
	};

    componentWillUnmount() {
        ProjectStore.removeChangeListener(this._onChangeListener);
    };

	_onChange() {
		let state = getStateFromStore();
		this.setState(state);
	};                     

};

function getStateFromStore() {
	return {
		projects: ProjectStore.getAll().map((prj) => new Project(prj))
	};
}