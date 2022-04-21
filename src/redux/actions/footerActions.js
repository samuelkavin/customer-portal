import * as types from './actionTypes';
import * as footerService from '../../services/footer/footerService';

export function loadFootersSuccess(footers) {
	return { type: types.LOAD_FOOTERS_SUCCESS, footers };
}

export function loadFooters() {
	return function (dispatch) {
		return footerService
			.getFooters()
			.then(footers => {
				dispatch(loadFootersSuccess(footers));
			})
			.catch(error => {
				throw error;
			});
	};
}
