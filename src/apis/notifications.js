import axiosInstance from './axios';
import { API_PATH } from '../constants/path';

export const getNotificationSettings = async () => {
	const response = await axiosInstance.get(`${API_PATH.NOTIFICATION_SETTINGS}`);
	return response.data.result;
};

export const updateNotificationSetting = async (type, status) => {
	const response = await axiosInstance.patch(
		`${API_PATH[`NOTIFICATION_${type.toUpperCase()}`]}`,
		{
			status,
		},
	);
	return response.data.result;
};
