import axios from 'axios';
import { API_PATH } from '../constants';
import axiosInstance from './axios';

const createPresinedURL = async filename => {
	const { data } = await axiosInstance.get(
		`${API_PATH.IMAGE}/upload?filename=${filename}`,
	);

	return data;
};

const uploadImageToS3 = async ({ url, file }) => {
	try {
		const res = await axios.put(url, file, {
			headers: {
				'Content-Type': file.type,
			},
		});
		console.log(res);

		return res;
	} catch (error) {
		console.log(error);
	}
};

export { createPresinedURL, uploadImageToS3 };
