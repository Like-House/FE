import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getChatRooms = async ({ familySpaceId, cursor, take }) => {
	const token = localStorage.getItem('accessToken');

	try {
		const { data } = await axiosInstance.get(
			`${API_PATH.CHAT}?familySpaceId=${familySpaceId}&cursor=${cursor}&take=${take}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { getChatRooms };
