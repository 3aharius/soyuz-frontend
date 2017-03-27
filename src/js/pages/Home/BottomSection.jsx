import React from 'react';

import FeaturedVideo from './FeaturedVideo';
import LatestBlog from './LatestBlog';

export default class BottomSection extends React.Component {
	      
	render() {
		return (
			<div>
				<ul>
					<FeaturedVideo />
					<LatestBlog />
				</ul>
			</div>
		);                   
	};                       

}