import React from 'react';
import {connect} from 'react-redux';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';
import Project from 'components/Project';
import {fetchProjectBySeoName} from 'actions/projectActions';

@connect((store) => {
  return {
    project: store.projects.project
  };
})

export default class ProjectPage extends React.Component {

	componentWillMount() {
		const {project} = this.props.params;
		this.props.dispatch(fetchProjectBySeoName(project));
	}
            
	render() {
		let {title, img, description} = new Project(this.props.project);
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

}