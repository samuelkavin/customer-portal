import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="page">
			<h3>Page Not Found!</h3>
			<div className="content">
				Go to <Link to="/dashboard">Dashboard</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
