import { createSlice } from '@reduxjs/toolkit';
import * as customerService from '../../services/customers/customerService';

export const getCustomersData = () => async dispatch => {
	return customerService.getCustomers()
		.then(response => {
			return dispatch(customerSuccess(response));
		})
		.catch(error => {
			return dispatch(customerError(error));
		});
};

const initialState = {
	list: [],
};

const customerSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {
		customerSuccess: (state, action) => {
			state.list = action.payload.data;
		},
		customerError: (state, action) => {
			state.list = action.payload;
		},
	},
	extraReducers: {},
});

export const { customerSuccess, customerError } = customerSlice.actions;

export const selectCustomers = state => state.customers.list;

export default customerSlice.reducer;
