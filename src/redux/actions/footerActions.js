import * as types from './actionTypes';
import * as footerApi from '../../api/footerApi';

export function loadFootersSuccess(footers) {
    return { type: types.LOAD_FOOTERS_SUCCESS, footers };
}

export function loadFooters() {
    return function (dispatch) {
        return footerApi
            .getFooters()
            .then((footers) => {
                dispatch(loadFootersSuccess(footers));
            })
            .catch((error) => {
                throw error;
            });
    };
}
