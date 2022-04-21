import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextFieldFormsy from '../common/TextFieldFormsy';
import { submitLogin } from '../../components/auth/authSlice';

const LoginPage = props => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const login = useSelector(({ auth }) => auth);

	const [isFormValid, setIsFormValid] = useState(false);
	const [saving, setSaving] = useState(false);
	const formRef = useRef(null);

	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error,
			});
			disableButton();
		}
	}, [login.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	async function handleSubmit(model) {
		setSaving(true);
		try {
			await dispatch(submitLogin(model));
			navigate('/dashboard');
			toast.success('Login successfull');
		} catch (error) {
			setSaving(false);
			toast.success('Login failed, please try again');
		}
	}

	return (
		<Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', margin: '5rem auto', width: '50%' }}>
			<CardContent sx={{ width: '100%' }}>
				<Typography variant="h5" sx={{ marginBottom: '2rem' }} gutterBottom>
					Login
				</Typography>
				<Formsy onValidSubmit={handleSubmit} onValid={enableButton} onInvalid={disableButton} ref={formRef}>
					<Box component="div" sx={{ mb: 2 }}>
						<TextFieldFormsy
							type="text"
							name="email"
							label="Email"
							value="eve.holt@reqres.in"
							validations={{
								isEmail: true,
							}}
							validationErrors={{
								isEmail: 'Please enter a valid email address',
							}}
							variant="outlined"
							required
						/>
					</Box>
					<Box component="div" sx={{ mb: 2 }}>
						<TextFieldFormsy
							type="password"
							name="password"
							label="Password"
							value="cityslicka"
							variant="outlined"
							required
						/>
					</Box>
					<Button
						type="submit"
						variant="contained"
						style={{ width: '100%' }}
						color="primary"
						aria-label="LOG IN"
						disabled={!isFormValid}
						value="legacy"
					>
						{saving ? 'Loggining...' : 'Login'}
					</Button>
				</Formsy>
			</CardContent>
		</Card>
	);
};

LoginPage.propTypes = {
	formRef: PropTypes.object,
	navigate: PropTypes.func,
	isFormValid: PropTypes.bool,
	saving: PropTypes.bool,
};

export default LoginPage;
