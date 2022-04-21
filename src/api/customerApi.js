import { handleResponse, handleError } from './apiUtils';
const baseUrl = `https://reqres.in/api/users?per_page=12`;

export function getCustomers() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
