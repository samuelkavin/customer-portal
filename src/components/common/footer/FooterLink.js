import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FooterLink = ({ footers }) => {
	return (
		<>
			<div>
				<h6>{footers.name}</h6>
				<ul className="list-unstyled">
					{footers.values.map(nav => {
						return (
							<li key={nav.name}>
								<Link to="/dashboard">{nav.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default FooterLink;
