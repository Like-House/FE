import axios from 'axios';
import { API_PATH } from '../constants/path';

export const getMyPosts = async ({ page = 1 }) => {
  const response = await axios.get(`${API_PATH.MY_POSTS}?page=${page}`);
  return response.data.result;
};
