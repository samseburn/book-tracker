import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="Header">
			<Link to="/">Home</Link>
			<Link to="/new">New</Link>
			<Link to="/edit">Edit</Link>
			<Link to="/book">Book</Link>
		</div>
	);
};

export default Header;
