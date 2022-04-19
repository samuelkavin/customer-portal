import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import footers from './footerReducer';
import auth from './loginSlice';

const rootReducer = combineReducers({
    courses,
    authors,
    footers,
    auth
});

export default rootReducer;
