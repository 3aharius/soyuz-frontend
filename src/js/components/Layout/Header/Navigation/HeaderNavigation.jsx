import React, { cloneElement } from 'react';
import { Link, IndexLink } from "react-router";

export class HeaderNavigationMenu extends React.Component {
	      
	constructor(props) {
		super(props);
	}

	// handleClick(event) {
	//     const node = event.target;
	//     const childrenNodes = [].slice.call(this.refs.container.children);
	//     const indx = childrenNodes.indexOf(node.parentNode);
	//     const childNode = childrenNodes[indx];
	// 	const child = this.refs['child-' + childNode.href];
	// 	const prevSelected = this.state.selectedIndex;
	// 	const prevChild = this.refs['child-' + prevSelected];
	// 	prevChild.setSelected(false);
	// 	child.setSelected(true);
	// 	this.state.selectedIndex = indx;
	// }

	/*render() {
		const {location} = this.props;
		let children = React.Children.map(this.props.children, function (child) {
            return cloneElement(child, {
                ref: 'child-' + child.props.href,
                location
            });
        });
		return (
			<ul id="navigation" ref='container'>
				{children}
			</ul>		
		);                   
	};*/


	render() {
		return (
			<ul id="navigation">
				{this.props.children}
			</ul>		
		);                   
	};

	/*render() {
		const { location } = this.props;
		let selectedIndex = 0;
        let children = React.Children.map(this.props.children, function (child, indx) {
			if(child.props.selected) {
				selectedIndex = indx;
			}
            return cloneElement(child, {
                ref: 'child-' + indx
            });
        });
        this.state = {selectedIndex};
		return (
			<ul id="navigation" ref='container' onClick={this.handleClick.bind(this)}>
				{children}
			</ul>		
		);                   
	};*/

}

export class HeaderNavigationMenuItem extends React.Component {
	
	constructor(props){
		super(props);
	};


/*	render() {
		let {location, className = '', href, text} = this.props;
		className = className + ' ' + (location.pathname == href && 'selected' || '');
		return (
			<li className={className}>
				<Link to={href}>{text}</Link>
			</li>
		);                   
	};*/

	render() {
		let {href, text, indexLink=false} = this.props;
		let link = indexLink === false ? <Link activeClassName='selected' to={href}>{text}</Link>
			: <IndexLink activeClassName='selected' to={href}>{text}</IndexLink>
		return (
			<li>
				{link}
			</li>
		);                   
	};
                  

}