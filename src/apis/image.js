import axios from 'axios';
import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const createPresignedURL = async (filename) => {
  const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/upload`, {
    keyName: filename,
  });
  return data;
};

const uploadImageToS3 = async ({ url, file }) => {
  try {
    const res = await axios.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getRealImageUrl = async (imageUrl) => {
  try {
    const { data } = await axiosInstance.post(`${API_PATH.IMAGE}/download`, {
      keyName: imageUrl,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { createPresignedURL, uploadImageToS3, getRealImageUrl };
