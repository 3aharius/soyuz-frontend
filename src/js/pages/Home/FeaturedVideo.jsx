import React from 'react';

export default class FeaturedVideo extends React.Component {
	      
	render() {
		return (
			<li>
				<h1>FEATURED VIDEO</h1>
				<a href="blog.html"><img src={require('images/mars-rover.jpg')} /><span></span></a>
			</li>
		);                   
	};                       

}