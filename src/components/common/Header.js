import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import withRouter from '../../helpers/withRoute';
import { isAuthenticated } from '../../redux/selectors/authSelector';

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
		color: '#000',
	},
});

const Header = props => {
	const classes = useStyles();
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
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button color="inherit">
								<Link className={classes.link} to="/dashboard">
									Customer
								</Link>
							</Button>
						</Box>
					)}
					<Box sx={{ pr: 4 }}>
						<Button color="inherit">
							{!props.isAuthenticated ? (
								<Link className={classes.link} to="/login">
									Login
								</Link>
							) : (
								<Link className={classes.link} to="/login">
									Logout
								</Link>
							)}
						</Button>
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

export default withRouter(connect(mapStateToProps)(Header));
