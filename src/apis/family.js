import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getFamilyList = async () => {
  const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);
  return data;
};

const updateFamilyMember = async (userId, data) => {
  const response = await axiosInstance.patch(
    `${API_PATH.FAMILY}/${userId}`,
    data
  );
  return response.data;
};

export { getFamilyList, updateFamilyMember };
