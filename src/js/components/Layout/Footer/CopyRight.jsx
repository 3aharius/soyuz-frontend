import React from 'react';

export default class CopyRight extends React.Component {
	      
	constructor() {
		super();
		
		this.state = {
			copyRightText: `${new Date()} BY SPACE PROSPECTION | ALL RIGHTS RESERVED`,
		};
	}

	render() {
		return (
			<div class="footnote">
				<div>
					<p>&copy;&nbsp;{this.state.copyRightText}</p>
				</div>
			</div>
		);                   
	};                       

}