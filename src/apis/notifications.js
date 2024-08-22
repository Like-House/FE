import axiosInstance from './axios';
import { API_PATH } from '@/constants';

export const getNotificationSettings = async () => {
  const response = await axiosInstance.get(`${API_PATH.NOTIFICATION}`);
  return response.data.result;
};

export const updateNotificationSettings = async (type, status) => {
  const response = await axiosInstance.patch(
    `${API_PATH[`NOTIFICATION_${type.toUpperCase()}`]}`,
    { status }
  );
  return response.data.result;
};
