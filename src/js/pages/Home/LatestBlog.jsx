import React from 'react';

export default class LatestBlog extends React.Component {
	      
	render() {
		return (
				<li>
					<h1>LATEST BLOG</h1>
					<ul>
						<li>
							<a href="blog.html"><img src={require('images/finding-planet.jpg')} /></a>
							<h1>FINDING PLANET X-123</h1>
							<span>FEBRUARY 6, 2023</span>
							<a href="blog.html" className="more">Read More</a>
						</li>
						<li>
							<a href="blog.html"><img src={require('images/new-satellitedish.jpg')} /></a>
							<h1>NEW SATELLITE DISH</h1>
							<span>FEBRUARY 3, 2025</span>
							<a href="blog.html" className="more">Read More</a>
						</li>
					</ul>
				</li>
		);                   
	};                       

}