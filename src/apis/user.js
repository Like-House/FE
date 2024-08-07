import axiosInstance from './axios';
import { API_PATH } from '../constants';

export const blockUser = async (userId) => {
  try {
    const response = await axiosInstance.post(`${API_PATH.USER}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};