import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleToggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
			<div className="container">
				<Link className="navbar-brand" to="/">ALU Kola</Link>
				<button className="navbar-toggler" type="button" onClick={handleToggle}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
					<ul className="navbar-nav navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/">Domů</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/o-nas">O nás</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/reference">Reference</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
