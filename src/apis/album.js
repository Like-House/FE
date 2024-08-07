import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getAlbum = async familySpaceId => {
	const { data } = await axiosInstance.get(
		API_PATH.ALBUM.replace('{familySpaceId}', familySpaceId),
	);
	return data;
};

export { getAlbum };
