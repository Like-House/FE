import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const getProfile = async () => {
  const { data } = await axiosInstance.get(`${API_PATH.PROFILE}`);

  return data;
};

const blockUser = async (userId) => {
  const { data } = await axiosInstance.post(`${API_PATH.BLOCK}/${userId}`);

  return data;
};

const unBlockUser = async (userId) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.BLOCK}/release/${userId}`
  );
  return data;
};

const updateProfile = async (profileData) => {
  const { data } = await axiosInstance.patch(
    `${API_PATH.PROFILE}`,
    profileData
  );
  return data;
};

const changePassword = async ({ currentPassword, newPassword }) => {
  try {
    const { data } = await axiosInstance.patch(`${API_PATH.PASSWORD}`, {
      currentPassword: currentPassword, // 평면 구조로 전달
      newPassword: newPassword, // 평면 구조로 전달
    });
    return data;
  } catch (error) {
    console.error('Error during password change:', error);
    throw error;
  }
};

export { getProfile, blockUser, unBlockUser, updateProfile, changePassword };
