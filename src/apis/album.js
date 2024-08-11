import axiosInstance from './axios.js';
import { API_PATH } from '@/constants';

const getAlbum = async (familySpaceId, date, taggedUserIds) => {
	let url = `${API_PATH.ALBUM}/${familySpaceId}`;
	if (date === undefined && taggedUserIds !== undefined) {
		url += `?taggedUserIds=${taggedUserIds}`;
	} else if (date !== undefined && taggedUserIds === undefined) {
		url += `?date=${date}`;
	} else if (date !== undefined && taggedUserIds !== undefined) {
		url += `?date=${date}&taggedUserIds=${taggedUserIds}`;
	}

	const { data } = await axiosInstance.get(url);
	return data;
};

const getAlbumPost = async postId => {
	const { data } = await axiosInstance.get(`${API_PATH.ALBUM_POST}/${postId}`);
	return data;
};

export { getAlbum, getAlbumPost };