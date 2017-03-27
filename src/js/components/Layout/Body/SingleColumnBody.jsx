import React from 'react';

export default class SingleColumnBody extends React.Component {
	      
	render() {
		return (
			<div id="body" className={this.props.className}>
				{this.props.children}
			</div>		
		);                   
	};                       

}