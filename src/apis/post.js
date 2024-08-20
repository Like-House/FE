import axiosInstance from './axios';
import { API_PATH } from '@/constants';

const getPosts = async ({ familySpaceId, cursor, size }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.FAMILY_SPACE}/${familySpaceId}/posts?cursor=${cursor}&size=${size}`,
	);
	return data;
};

const getMyPosts = async ({ pageParam }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.MY_POSTS}?cursor=${pageParam}&size=10`,
	);

	return data;
};

const getWritePost = async ({ postData }) => {
	const { data } = await axiosInstance.post(`${API_PATH.WRITE_POST}`, postData);
	return data;
};

const getPostById = async postId => {
	const { data } = await axiosInstance.get(`${API_PATH.POST}/${postId}`);
	return data;
};

const updatePost = async ({ postId, updatedData }) => {
	const { data } = await axiosInstance.put(
		`${API_PATH.POST}/${postId}`,
		updatedData,
	);
	return data;
};

const deletePost = async postId => {
	const { data } = axiosInstance.delete(`${API_PATH.POST}/${postId}`);
	return data;
};

const likePost = async postId => {
	const { data } = await axiosInstance.post(`${API_PATH.POST}/${postId}/like`);
	return data;
};

const unLikePost = async postId => {
	const { data } = await axiosInstance.delete(
		`${API_PATH.POST}/${postId}/like`,
	);
	return data;
};

// comment

const addComment = async ({ postId, content, parentId }) => {
	const { data } = await axiosInstance.post(`${API_PATH.COMMENT}`, {
		postId,
		content,
		parentId,
	});
	return data;
};

const deleteComment = async commentId => {
	const { data } = await axiosInstance.delete(
		`${API_PATH.COMMENT}/${commentId}`,
	);

	return data;
};

const patchComment = async ({ commentId, content }) => {
	const { data } = await axiosInstance.patch(
		`${API_PATH.COMMENT}/${commentId}`,
		{ commentId, content },
	);

	return { data };
};

export {
	getPosts,
	getMyPosts,
	getWritePost,
	getPostById,
	updatePost,
	addComment,
	deletePost,
	likePost,
	unLikePost,
	deleteComment,
	patchComment,
};
