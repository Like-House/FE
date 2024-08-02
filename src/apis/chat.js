import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getChatRooms = async ({ familySpaceId, cursor, take }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.CHAT}?familySpaceId=${familySpaceId}&cursor=${cursor}&take=${take}`,
	);
	return data;
};

const exitChatRoom = async chatRoomId => {
	const { data } = await axiosInstance.post(`${API_PATH.CHAT}/exit`, {
		chatRoomId,
	});
	return data;
};

export { getChatRooms, exitChatRoom };
