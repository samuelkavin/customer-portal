import axios from 'axios';

const baseUrl = `https://reqres.in/api/users?per_page=12`;

export function getCustomers() {
	return new Promise((resolve, reject) => {
		axios.get(baseUrl).then(response => {
			if (response.data) {
				resolve(response.data);
			} else {
				reject(response.data.error);
			}
		});
	});
}
