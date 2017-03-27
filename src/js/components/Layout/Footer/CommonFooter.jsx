import React from 'react';

import FollowUs from './FollowUs';
import CopyRight from './CopyRight';

export default class CommonFooter extends React.Component {
	      
	render() {
		return (
			<div id="footer">
				<FollowUs />
				<CopyRight />
			</div>	
		);                   
	};                       

}