import React from 'react';

export default class BodyBody extends React.Component {
	      
	render() {
		return (
			<div className="body">
				{this.props.children}
			</div>
		);                   
	};              

}