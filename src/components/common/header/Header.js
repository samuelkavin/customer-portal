import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { isAuthenticated } from '../../../redux/selectors/authSelector';
import { toast } from 'react-toastify';
import { logoutUser } from '../../auth/authSlice';
import { useDispatch } from 'react-redux';
import HeaderLink from './HeaderLink';

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
		color: '#000',
	},
});

const Header = props => {
	const classes = useStyles();
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logoutUser());
		toast.success('Logout successfull');
	}

	return (
		<AppBar position="static" color="transparent">
			<Container>
				<Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						style={{ fontWeight: '900' }}
						sx={{ mr: 2, pl: 4, pr: 2 }}
					>
						Zurich
					</Typography>
					{props.isAuthenticated && (
						<Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
							<Button color="inherit">
								<HeaderLink className={classes.link} to="/dashboard">
									Customers
								</HeaderLink>
							</Button>
							<Button color="inherit">
								<HeaderLink className={classes.link} to="/products">
									Products
								</HeaderLink>
							</Button>
						</Box>
					)}
					<Box sx={{ pr: 4 }}>
						{!props.isAuthenticated ? (
							<Button color="inherit">
								<Link className={classes.link} to="/">
									Login
								</Link>
							</Button>
						) : (
							<Button color="inherit" onClick={() => handleLogout()}>
								<Link className={classes.link} to="/">
									Logout
								</Link>
							</Button>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(state),
	};
};

export default connect(mapStateToProps)(Header);
