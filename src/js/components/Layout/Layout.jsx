import React from 'react';

import CommonHeader from './Header/CommonHeader';
import CommonFooter from './Footer/CommonFooter';

export default class Layout extends React.Component {
	
	constructor() {
		super();
		console.log("constructor");
	};

	componentWillMount() {
        console.log('componentWillMount');
    };

            
	render() {
		console.log('render');
		console.log(this.props.history);
		return (
			<div id="page">
				<CommonHeader />
				{this.props.children}
				<CommonFooter />
			</div>			
		);                   
	};                       
                             
	componentDidMount() {
        console.log('componentDidMount');
    };

}