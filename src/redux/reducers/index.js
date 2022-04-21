import { combineReducers } from 'redux';
import courses from './courseReducer';
import footers from './footerReducer';
import auth from './authSlice';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    courses,
    footers,
    apiCallsInProgress,
    auth
});

export default rootReducer;
