import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors/authSelector';
import withRouter from '../../helpers/withRoute';

const Header = props => {
	console.log('props', props);
	return (
		<Navbar className="shadow" fixed="top" collapseOnSelect expand="lg" bg="light">
			<Container>
				<Navbar.Brand href="#home" style={{ fontWeight: '900' }}>
					Zurich
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse>
					{props.isAuthenticated && (
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/dashboard">
								Customers
							</Nav.Link>
							<Nav.Link href="#pricing">Products</Nav.Link>
						</Nav>
					)}
					<Nav className="ms-auto">
						{!props.isAuthenticated ? (
							<Nav.Link as={NavLink} to="/login">
								Login
							</Nav.Link>
						) : (
							<Nav.Link as={NavLink} to="/login">
								Logout
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(state),
	};
};

export default withRouter(connect(mapStateToProps)(Header));
