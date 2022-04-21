import { handleResponse, handleError } from '../../helpers/apiUtils';
const baseUrl = `http://localhost:3001/footers`;

export function getFooters() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}
