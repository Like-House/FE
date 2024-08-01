import axios from 'axios';
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
		const { data } = await axios.post(
			`${import.meta.env.VITE_API_URL}${API_PATH.SIGNUP}`,
			{
				name,
				email,
				password,
				birthDate,
				profileImage,
			},
			{
				withCredentials: true,
			},
		);
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const { VITE_KAKAO_API_KEY, VITE_KAKAO_REDIRECT_URI } = import.meta.env;

const kakaoLogin = async () => {
	const token = new URL(window.location.href).searchParams.get('code');

	try {
		const res = await axios.post(
			`${API_PATH.KAKAO}`,
			{
				grant_type: 'authorization_code',
				client_id: VITE_KAKAO_API_KEY,
				redirect_uri: VITE_KAKAO_REDIRECT_URI,
				code: token,
			},
			{
				headers: {
					'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				},
			},
		);

		return res.data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export { login, signup, kakaoLogin };
