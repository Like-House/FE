import { API_PATH } from '../constants/path';
import axiosInstance from './axios';

const login = async ({ email, password }) => {
	try {
		const { data } = await axiosInstance.post(`${API_PATH.LOGIN}`, {
			email,
			password,
		});
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const signup = async ({ name, email, password, birthDate, profileImage }) => {
	try {
		const { data } = await axiosInstance.post(`${API_PATH.SIGNUP}`, {
			name,
			email,
			password,
			birthDate,
			profileImage,
		});
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export { login, signup };
