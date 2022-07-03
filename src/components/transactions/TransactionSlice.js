import { createSlice } from '@reduxjs/toolkit';
import * as transactionService from '../../services/transactions/transactionsService';

export const getTransactionsData = () => async dispatch => {
	return transactionService
		.getTransactions()
		.then(response => {
			return dispatch(transactionSuccess(response));
		})
		.catch(error => {
			return dispatch(transactionError(error));
		});
};

const initialState = {
	list: [],
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		transactionSuccess: (state, action) => {
			state.list = action.payload.data;
		},
		transactionError: (state, action) => {
			state.list = action.payload;
		},
	},
	extraReducers: {},
});

export const { transactionSuccess, transactionError } = transactionsSlice.actions;

export const selectTransactions = state => state.transactions.list;

export default transactionsSlice.reducer;
