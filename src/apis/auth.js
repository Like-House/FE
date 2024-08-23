import axios from 'axios';
import axiosInstance from './axios';

import { API_PATH } from '@/constants/path';

const login = async ({ email, password }) => {
  const { data } = await axiosInstance.post(`${API_PATH.LOGIN}`, {
    email,
    password,
  });

  return data;
};

const signup = async ({ name, email, password, birthDate, imageKeyName }) => {
  const { data } = await axiosInstance.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.SIGNUP}`,
    {
      name,
      email,
      password,
      birthDate,
      imageKeyName,
    },
    {
      withCredentials: false,
    }
  );
  return data;
};

const getEmailCode = async (email) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.EMAIL}/send-verification?email=${email}`
  );

  return data;
};

const checkEmailCode = async ({ email, code }) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.EMAIL}/verification`,
    { email, code }
  );

  return data;
};

const logout = async () => {
  const { data } = await axiosInstance.post(`${API_PATH.LOGOUT}`);

  return data;
};

const deleteAccount = async () => {
  const { data } = await axiosInstance.delete(`${API_PATH.AUTH}`);

  return data;
};

export { login, signup, getEmailCode, checkEmailCode, logout, deleteAccount };
