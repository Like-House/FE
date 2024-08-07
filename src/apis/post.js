import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getPosts = async ({ familySpaceId, page, size }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.FAMILY_SPACE}/${familySpaceId}/posts?page=${page}&size=${size}`,
	);
	return data;
};

export { getPosts };
