import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/auth/authService';

export const submitLogin =
	({ email, password }) =>
	async dispatch => {
		return authService
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				return dispatch(loginSuccess());
			})
			.catch(error => {
				return dispatch(loginError(error));
			});
	};

export const logoutUser = () => async (dispatch, getState) => {
	authService.logout();
	dispatch(logoutSuccess());
};

const initialState = {
	loggedIn: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.loggedIn = true;
		},
		loginError: (state, action) => {
			state.loggedIn = false;
			state.error = action.payload;
		},
		logoutSuccess: (state, action) => {
			state.loggedIn = false;
		},
	},
	extraReducers: {},
});

export const { loginSuccess, loginError, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
