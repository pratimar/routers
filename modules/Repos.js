import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		const userName = e.target.elements[0].value;
		const repo = e.target.elements[1].value;
		const path = `/repos/${userName}/${repo}`;
		console.log(path);
	},
	render () {
		return (
			<div>
			<h2>Repos</h2>
			<ul>
			 <li><NavLink to="/repos/reactjs/react-router">ReactRouter</NavLink></li>
			 <li><NavLink to="/repos/facebook/react">FB React</NavLink></li>
			<li>
			 <form onSubmit={this.handleSubmit}>
			   <input type="text" placeholder="user Name" />
			   <input type="text" placeholder="repo" />
			   <button type="submit">Go</button>
			 </form>
			</li>
			</ul>
			{this.props.children}
			</div>
		)
	}
})
