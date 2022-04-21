import * as types from './actionTypes';
import * as customerApi from '../../api/customerApi';
import { beginApiCall } from './apiStatusActions';

export function loadCustomerSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomer() {
  return function (dispatch) {
    dispatch(beginApiCall())
    return customerApi
      .getCustomers()
      .then((customers) => {
        dispatch(loadCustomerSuccess(customers.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
