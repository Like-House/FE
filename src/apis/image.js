import axios from 'axios';
import { API_PATH } from '../constants';
import axiosInstance from './axios';

const createPresinedURL = async filename => {
	const { data } = await axiosInstance.get(
		`${API_PATH.IMAGE}/upload?filename=${filename}`,
	);
	console.log(data);
	return data;
};

const uploadImageToS3 = async ({ url, file }) => {
	try {
		const res = await axios.put(url, file, {
			headers: {
				'Content-Type': file.type,
			},
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

const getRealImageUrl = async imageUrl => {
	try {
		const { data } = await axiosInstance.get(
			`${API_PATH.IMAGE}/download?keyName=${imageUrl}`,
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};

export { createPresinedURL, uploadImageToS3, getRealImageUrl };
