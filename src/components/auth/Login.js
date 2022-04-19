import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Formsy from 'formsy-react';
import TextFieldFormsy from '../common/TextFieldFormsy';
import { Col, Row, Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { submitLogin } from '../../redux/reducers/loginSlice';
import Button from '@material-ui/core/Button';

const Login = () => {
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth);

    console.log('loginlogin', login);

	const [isFormValid, setIsFormValid] = useState(false);

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

	function handleSubmit(model) {
		console.log('model', model);
		dispatch(submitLogin(model));
	}

	return (
		<Formsy
			style={{ marginTop: '5rem' }}
			onValidSubmit={handleSubmit}
			onValid={enableButton}
			onInvalid={disableButton}
			ref={formRef}
			className="flex flex-col justify-center w-full"
		>
			<TextFieldFormsy
				className="mb-16"
				type="text"
				name="email"
				label="Username/Emailsss"
				value="admin"
				validations={{
					minLength: 4,
				}}
				validationErrors={{
					minLength: 'Min character length is 4',
				}}
				variant="outlined"
				required
			/>

			<TextFieldFormsy
				className="mb-16"
				type="password"
				name="password"
				label="Password"
				value="admin"
				validations={{
					minLength: 4,
				}}
				validationErrors={{
					minLength: 'Min character length is 4',
				}}
				variant="outlined"
				required
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				className="w-full mx-auto mt-16 normal-case"
				aria-label="LOG IN"
				disabled={!isFormValid}
				value="legacy"
			>
				Login
			</Button>
		</Formsy>
	);
};

export default Login;
