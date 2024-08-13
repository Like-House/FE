import axiosInstance from './axios';
import { API_PATH } from '@/constants';

export const updateNotificationSettings = async (type, status) => {
  const response = await axiosInstance.patch(
    `${API_PATH[`NOTIFICATION_${type.toUpperCase()}`]}`,
    { status }
  );
  return response.data.result;
};
