import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function HeaderLink({ children, to, ...props }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	return (
		<Link style={{ color: match ? '#2196f3' : '#000' }} to={to} {...props}>
			{children}
		</Link>
	);
}

export default HeaderLink;
