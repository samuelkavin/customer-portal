import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import footers from './footerReducer';
import auth from './loginSlice';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    courses,
    authors,
    footers,
    apiCallsInProgress,
    auth
});

export default rootReducer;
