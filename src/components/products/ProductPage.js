import React from 'react';
import { Link } from 'react-router-dom';

function ProductPage() {
	return (
		<div className="page">
			<h3>Product Page</h3>
			<div className='content'>
				Go to{' '}
				<Link to="/dashboard">
					Dashboard
				</Link>
			</div>
		</div>
	);
}

export default ProductPage;
