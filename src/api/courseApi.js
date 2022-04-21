import { handleResponse, handleError } from './apiUtils';
const baseUrl = `https://reqres.in/api/users?per_page=12`;

export function getCourses() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
