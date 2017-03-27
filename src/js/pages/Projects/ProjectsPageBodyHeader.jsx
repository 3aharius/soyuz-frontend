import React from 'react';

export default class ProjectsPageBodyHeader extends React.Component {

	constructor() {
		super();

	};

	handleInput(event) {
		const value = event.target.value;
		this.props.onFilter(value);
	};
	      
	render() {
		return (
			<div>
				<form>
					<h1>Projects</h1>
					<input type="text" placeholder="filter" onChange={this.handleInput.bind(this)} />
				</form>
			</div>
		);                   
	};                       

}