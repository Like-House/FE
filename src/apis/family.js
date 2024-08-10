import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getFamilyList = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);
	return data;
};

const createFamilyspace = async () => {
	const { data } = await axiosInstance.post(`${API_PATH.FAMILY_SPACE}`);

	return data;
};

export { getFamilyList, createFamilyspace };
