import React from 'react';

export default class HomePageBanner extends React.Component {
	      
	render() {
		return (
			<div>
				<img src={require('images/satellite.png')} className="satellite"/>
				<h1>SOYUZ TMA-M</h1>
				<h2>SPACECRAFT</h2>
				<a href="blog.html" className="more">Read More</a>
				<h3>FEATURED PROJECTS</h3>
				<ul>
					<li>
						<a href="projects.html"><img src={require('images/project-image1.jpg')} /></a>
					</li>
					<li>
						<a href="projects.html"><img src={require('images/project-image2.jpg')} /></a>
					</li>
					<li>
						<a href="projects.html"><img src={require('images/project-image3.jpg')} /></a>
					</li>
					<li>
						<a href="projects.html"><img src={require('images/project-image4.jpg')} /></a>
					</li>
				</ul>
			</div>
		);                   
	};                       

}