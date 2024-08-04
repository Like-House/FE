import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getFamilyList = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);
	return data;
};

export { getFamilyList };
