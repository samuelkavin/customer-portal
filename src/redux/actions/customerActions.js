import * as types from './actionTypes';
import * as customerService from '../../services/customers/customerService';
import { beginApiCall } from './apiStatusActions';

export function loadCustomerSuccess(customers) {
	return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomer() {
	return function (dispatch) {
		dispatch(beginApiCall());
		return customerService
			.getCustomers()
			.then(customers => {
				dispatch(loadCustomerSuccess(customers.data));
			})
			.catch(error => {
				throw error;
			});
	};
}
