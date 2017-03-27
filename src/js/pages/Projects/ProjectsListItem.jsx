import React from 'react';
import { Link } from "react-router";

export default class ProjectsListItem extends React.Component {
	
	constructor() {
		super();
	};
            
	render() {
		let {img, href, title, description} = this.props.item;
		return (
			<li>
				<img src={img} />
				<div>
					<Link to={href}>
						<h1>{title}</h1>
					</Link>
					<p>{description}</p>
				</div>
			</li>
		);
	};                       

}