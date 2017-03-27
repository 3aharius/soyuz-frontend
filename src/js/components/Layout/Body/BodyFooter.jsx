import React from 'react';

export default class BodyFooter extends React.Component {
	      
	render() {
		return (
			<div className="footer">
				{this.props.children}
			</div>
		);                   
	};              

}