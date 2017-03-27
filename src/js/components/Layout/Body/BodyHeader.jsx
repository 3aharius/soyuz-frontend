import React from 'react';

export default class BodyHeader extends React.Component {
	      
	render() {
		return (
			<div className="header">
				{this.props.children}
			</div>	
		);                   
	};              

}