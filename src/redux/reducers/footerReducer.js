import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function footerReducer(state = initialState.footers, action) {
    switch (action.type) {
        case types.LOAD_FOOTERS_SUCCESS:
            return action.footers;
        default:
            return state;
    }
}
