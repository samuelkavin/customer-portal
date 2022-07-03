import { combineReducers } from 'redux';
import customers from './customerReducer';
import footers from './footerReducer';
import auth from '../../components/auth/authSlice';
import transactions from '../../components/transactions/TransactionSlice';
import apiCallsInProgress from './apiStatusReducer';
// import customers from '../../components/customers/customerSlice'

const rootReducer = combineReducers({
	customers,
	footers,
	apiCallsInProgress,
	auth,
	transactions,
});

export default rootReducer;
