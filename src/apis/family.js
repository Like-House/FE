import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getFamilyList = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);
	return data;
};

const getFamilySpaceId = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY_SPACE_ID}`);
	return data;
};

export { getFamilyList, getFamilySpaceId };
