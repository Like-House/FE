import axios from 'axios';
import { API_PATH } from '../constants/path';

// 알림 설정을 가져오는 함수
export const getNotificationSettings = async () => {
  try {
    const response = await axios.get(`${API_PATH.NOTIFICATION_SETTINGS}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching notification settings:', error);
    throw error;
  }
};

// 알림 설정을 업데이트하는 함수
export const updateNotificationSettings = async (settings) => {
  try {
    const response = await axios.patch(
      `${API_PATH.NOTIFICATION_SETTINGS}`,
      settings
    );
    return response.data.result;
  } catch (error) {
    console.error('Error updating notification settings:', error);
    throw error;
  }
};
