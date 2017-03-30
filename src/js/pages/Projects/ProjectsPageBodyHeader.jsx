import React from 'react';
import {connect} from 'react-redux';

import {filterProjects} from 'actions/projectActions';

@connect((store) => {
  return {
    filter: store.projects.filter
  };
})

export default class ProjectsPageBodyHeader extends React.Component {

	handleInput(event) {
		const value = event.target.value;		
		this.props.dispatch(filterProjects(value));
	};
	      
	render() {
		return (
			<div>
				<form>
					<h1>Projects</h1>
					<input type="text" placeholder="filter" value={this.props.filter} onChange={this.handleInput.bind(this)} />
				</form>
			</div>
		);                   
	};                       

}