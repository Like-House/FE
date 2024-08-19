import axios from 'axios';
import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const createPresignedURL = async filename => {
	const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/upload`, {
		keyName: filename,
	});
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

const getRealImageUrl = async imageUrl => {
	try {
		const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/download`, {
			keyName: imageUrl,
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

const createPresignedURLs = async keynameList => {
	const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/upload/list`, {
		keyNames: keynameList,
	});
	return data;
};

const getRealImageUrls = async keyNames => {
	const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/download/list`, {
		keyNames,
	});
	return data;
};

export {
	createPresignedURL,
	uploadImageToS3,
	getRealImageUrl,
	createPresignedURLs,
	getRealImageUrls,
};
