import React from 'react';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';

export default class BlogPage extends React.Component {
	            
	render() {
		return (
			<SingleColumnBody>
				<BodyHeader>
					<div>
						<h1>Blog</h1>
						<div className="article">
							<ul>
								<li>
									<a href="singlepost.html"><img src={require('images/astronaut.jpg')} /></a>
									<h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
									<span>FEBRUARY 6, 2023</span>
									<p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
									<a href="singlepost.html" class="more">Read More</a>
								</li>
								<li>
									<a href="singlepost.html"><img src={require('images/satellite-dish.jpg')} /></a>
									<h1>ALIEN SIGNAL DISCOVERY</h1>
									<span>FEBRUARY 3, 2023</span>
									<p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
									<a href="singlepost.html" class="more">Read More</a>
								</li>
							</ul>
						</div>
						<div class="sidebar">
							<ul>
								<li>
									<h1>FEATURED POSTS</h1>
									<a href="singlepost.html"><img src={require('images/moon-satellite.jpg')} /></a>
									<h2>SOYUZ TMA-M</h2>
									<span>FEBRUARY 6, 2023</span>
								</li>
								<li>
									<h1>RECENT POSTS</h1>
									<ul>
										<li>
											<a href="singlepost.html"><img src={require('images/alien-life.jpg')} /></a>
											<h2>ALIEN LIFE</h2>
											<span>FEBRUARY 3, 2023</span>
										</li>
										<li>
											<a href="singlepost.html"><img src={require('images/galaxy.jpg')} /></a>
											<h2>THE GALAXY</h2>
											<span>FEBRUARY 1, 2023</span>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</BodyHeader>
			</SingleColumnBody>
		);
	};                       

}