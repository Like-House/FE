import axios from 'axios';
import { API_PATH } from '../constants/path';

export const getMyPosts = async ({ pageParam = 9223372036854776000 }) => {
  const response = await axios.get(
    `${API_PATH.MY_POSTS}?cursor=${pageParam}&size=10`
  );
  return response.data.result;
};
