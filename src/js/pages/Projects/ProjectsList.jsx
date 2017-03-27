import React from 'react';

import ProjectsListItem from './ProjectsListItem';

export default class ProjectsList extends React.Component {
	
	constructor() {
		super();
		let projects = [
			{
				id: 1,
				img: require('images/curious-rover.jpg'),
				href: '/projects/' + toSeoName('MARS CURIOSITY ROVER'),
				title: 'MARS CURIOSITY ROVER',
				description: 'Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use.',
			},
			{
				id: 2,
				img: require('images/space-station.jpg'),
				href: '/projects/' + toSeoName('INTERTERNATIONAL SPACE STATION'),
				title: 'INTERTERNATIONAL SPACE STATION',
				description: 'Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special.',
			},
			{
				id: 3,
				img: require('images/space-shuttle.png'),
				href: '/projects/' + toSeoName('Be Part of Our Community'),
				title: 'Be Part of Our Community',
				description: 'If you’re experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you.',
			},
			{
				id: 4,
				img: require('images/earth-satellite.jpg'),
				href: '/projects/' + toSeoName('We Have More Templates for You'),
				title: 'We Have More Templates for You',
				description: 'Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.',
			},
			{
				id: 5,
				img: require('images/project-image3.jpg'),
				href: '/projects/' + toSeoName('OUR MISSION'),
				title: 'OUR MISSION',
				description: 'This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.',
			},
		];
		this.projects = projects;
		this.state = {projects};
	};

	handleFilter(expr) {
		let projects = this.projects.filter(function(elem) {
            return elem.title.toLowerCase().indexOf(expr.toLowerCase()) !== -1;
        });

        this.setState({projects});
	}
            
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

}

function toSeoName(title) {
	return title.toLowerCase().replace(/\s+/g, '_')
}