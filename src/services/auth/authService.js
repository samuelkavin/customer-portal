import axios from 'axios';

class AuthService {
	signInWithEmailAndPassword = (email, password) => {
		const baseUrl = `https://reqres.in/api/login`;
		return new Promise((resolve, reject) => {
			axios
				.post(baseUrl, {
					email,
					password,
				})
				.then(response => {
					if (response.data.token) {
						this.setSession(response.data.token);
						resolve(response.data.token);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	logout = () => {
		this.setSession(null);
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

const instance = new AuthService();
export default instance;
