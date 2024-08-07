import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getProfile = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.PROFILE}`);

	return data;
};

export { getProfile };
