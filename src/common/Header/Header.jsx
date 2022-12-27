import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="Header">
			<Link to="/">Home</Link>
			<Link to="/new">New</Link>
		</div>
	);
};

export default Header;
