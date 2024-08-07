import axios from 'axios';
import { API_PATH } from '../constants/path';
import axiosInstance from './axios';

const login = async ({ email, password }) => {
	const { data } = await axiosInstance.post(`${API_PATH.LOGIN}`, {
		email,
		password,
	});

	return data;
};

const signup = async ({ name, email, password, birthDate, imageKeyName }) => {
	const { data } = await axios.post(
		`${import.meta.env.VITE_API_URL}${API_PATH.SIGNUP}`,
		{
			name,
			email,
			password,
			birthDate,
			imageKeyName,
		},
	);
	return data;
};

const getEmailCode = async email => {
	try {
		const { data } = await axios.post(
			`${import.meta.env.VITE_API_URL}${API_PATH.EMAIL}/send-verification?email=${email}`,
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export { login, signup, getEmailCode };
