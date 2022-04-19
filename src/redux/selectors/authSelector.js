export const isAuthenticated = state => {
	if (state.auth.loggedIn) return true;
	return false;
};
