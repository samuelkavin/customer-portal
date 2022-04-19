import { createSlice } from '@reduxjs/toolkit';
// import { setUserData } from './userSlice';
import jwtService from '../../services/jwtService';

export const submitLogin = ({ email, password }) => async dispatch => {
	return jwtService
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			// dispatch(setUserData(user));
			console.log('user', user)

			return dispatch(loginSuccess());
		})
		.catch(error => {
			console.log('error', error)
			return dispatch(loginError(error));
		});
};

const initialState = {
	loggedIn: false,
	error: null
};

const loginSlice = createSlice({
	name: 'auth/login',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.loggedIn = true;
		},
		loginError: (state, action) => {
			state.loggedIn = false;
			state.error = action.payload;
		}
	},
	extraReducers: {}
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
