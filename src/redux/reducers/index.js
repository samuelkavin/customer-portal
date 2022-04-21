import { combineReducers } from 'redux';
import customers from './customerReducer';
import footers from './footerReducer';
import auth from './authSlice';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    customers,
    footers,
    apiCallsInProgress,
    auth
});

export default rootReducer;
