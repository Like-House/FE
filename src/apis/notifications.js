import axios from 'axios';
import { API_PATH } from '../constants/path';

// 알림 설정을 가져오는 함수
export const getNotificationSettings = async () => {
  const response = await axios.get(`${API_PATH.NOTIFICATION_SETTINGS}`);
  return response.data.result || {}; // 항상 객체를 반환하도록 수정
};

// 알림 설정을 업데이트하는 함수
export const updateNotificationSettings = async (settings) => {
  const response = await axios.patch(
    `${API_PATH.NOTIFICATION_SETTINGS}`,
    settings
  );
  return response.data.result;
};
