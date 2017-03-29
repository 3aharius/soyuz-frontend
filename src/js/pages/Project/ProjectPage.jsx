import React from 'react';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';
import {loadProjectBySeoName} from 'actions/ProjectListActions';
import {ProjectStore} from 'stores';
import Project from 'components/Project';

export default class ProjectPage extends React.Component {
    
	constructor() {
		super();
		this.state = getStateFromStore();
		this._onChange = this._onChange.bind(this);
	};

	componentWillMount() {
		ProjectStore.addChangeListener(this._onChange);
		const {project} = this.props.params;
		loadProjectBySeoName(project);
	};

	componentDidMount() {
        
    };

    componentWillReceiveProps(nextProps) {
    	const {project: currProject} = this.props.params;
    	const {project: nextProject} = nextProps.params;
        if (currProject !== nextProject) {
            loadProjectBySeoName(nextProject);
        }
    };

	render() {
		let {title, img, description} = this.state.project;
		
		return (
			<SingleColumnBody>
				<BodyHeader>
					<div>
						<h1>{title}</h1>
						<img src={img} />
						<p>{description}</p>
					</div>
				</BodyHeader>
			</SingleColumnBody>
		);
	};

	componentWillUnmount() {
        ProjectStore.removeChangeListener(this._onChange);
    };

	_onChange() {
		let state = getStateFromStore();
		this.setState(state);
	};                 

}

function getStateFromStore() {
	return {
		project: new Project(ProjectStore.getProject())
	};
}