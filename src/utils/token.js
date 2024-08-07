function getAuthToken() {
	const token = localStorage.getItem('accessToken');

	return token;
}

export { getAuthToken };
