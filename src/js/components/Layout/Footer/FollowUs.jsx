import React from 'react';

export default class FollowUs extends React.Component {
	      
	constructor() {
		super();
		

		let followItems = [
			{href: '//freewebsitetemplates.com/go/facebook/', className: 'facebook', text: 'facebook'},
			{href: '//freewebsitetemplates.com/go/twitter/', className: 'twitter', text: 'twitter'},
			{href: '//freewebsitetemplates.com/go/googleplus/', className: 'googleplus', text: 'googleplus'},
			{href: '//pinterest.com/fwtemplates/', className: 'pinterest', text: 'pinterest'},
		];
		this.state = {
			title: 'FOLLOW OUR  MISSIONS ON',
			items: followItems,
		};
	}

	render() {
		let followComponents = this.state.items
				.map((element)=><a href={element.href} className={element.className} key={element.href}>{element.text}</a>);
		return (
			<div class="connect">
				<div>
					<h1>{this.state.title}</h1>
					<div>
						{followComponents}
					</div>
				</div>
			</div>
		);                   
	};                       

}