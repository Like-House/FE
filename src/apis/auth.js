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
	const { data } = await axios.post(
		`${import.meta.env.VITE_API_URL}${API_PATH.EMAIL}/send-verification?email=${email}`,
	);

	return data;
};

const checkEmailCode = async ({ email, code }) => {
	const { data } = await axios.post(
		`${import.meta.env.VITE_API_URL}${API_PATH.EMAIL}/verification`,
		{ email, code },
	);

	return data;
};

export { login, signup, getEmailCode, checkEmailCode };
