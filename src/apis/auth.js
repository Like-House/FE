import axiosInstance from './axios';

const login = async ({ email, password }) => {
	try {
		const { data } = await axiosInstance.post('/auth/signin', {
			email,
			password,
		});
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export { login };
