import axios from 'axios';

class JwtService {
	signInWithEmailAndPassword = (email, password) => {
		const baseUrl = `https://reqres.in/api/login`;
		console.log('eee', email);
		return new Promise((resolve, reject) => {
			axios
				.post(baseUrl, {
						email,
						password,
				})
				.then(response => {
					console.log('response', response);
					if (response.data.token) {
						this.setSession(response.data.access_token);
						resolve(response.data.token);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};
}

const instance = new JwtService();
export default instance;
