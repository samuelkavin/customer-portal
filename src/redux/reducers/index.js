import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import footers from './footerReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    footers,
});

export default rootReducer;
