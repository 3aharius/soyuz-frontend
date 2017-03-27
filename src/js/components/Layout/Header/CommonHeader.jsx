import React from 'react';
import { IndexLink } from "react-router";

import { HeaderNavigationMenu, HeaderNavigationMenuItem } from './Navigation/HeaderNavigation';

export default class CommonHeader extends React.Component {
	
	render() {
		return (
			<div id="header">
				<div>
					<IndexLink to='/' className="logo">
						<img src={require('images/logo.png')} />
					</IndexLink>
					<HeaderNavigationMenu>
						<HeaderNavigationMenuItem href='/' text='Home' indexLink/>
						<HeaderNavigationMenuItem href='/about' text='About' />
						<HeaderNavigationMenuItem href='/projects' text='Projects' />
						<HeaderNavigationMenuItem href='/blog' text='Blog' />
						<HeaderNavigationMenuItem href='/contact' text='Contact' />
					</HeaderNavigationMenu>
				</div>
			</div>		
		);                   
	};                       

}