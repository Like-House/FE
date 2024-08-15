import axiosInstance from './axios';
import { API_PATH } from '../constants';
import axios from 'axios';

const getPosts = async ({ familySpaceId, page, size }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.FAMILY_SPACE}/${familySpaceId}/posts?page=${page}&size=${size}`,
	);
	return data;
};

const getMyPosts = async ({ pageParam = 9223372036854776000 }) => {
	const response = await axios.get(
		`${API_PATH.MY_POSTS}?cursor=${pageParam}&size=10`,
	);
	return response.data.result;
};

const getWritePost = async ({postData}) => {
	const { data } = await axiosInstance.post(
		`${API_PATH.WRITE_POST}`,
		postData
	);
	return data;
};

const getPostById = async (postId) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.WRITE_POST}/${postId}`,
	);
	return data;
}

export { getPosts, getMyPosts, getWritePost, getPostById };
