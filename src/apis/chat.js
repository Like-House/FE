import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getChatRooms = async ({ familySpaceId, cursor, take }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.CHAT}?familySpaceId=${familySpaceId}&cursor=${cursor}&take=${take}`,
	);
	return data;
};

const createChatRoom = async ({
	familySpaceId,
	title,
	imageUrl,
	chatRoomType,
	roomParticipantIds,
}) => {
	const { data } = await axiosInstance.post(`${API_PATH.CHAT}`, {
		familySpaceId,
		title,
		imageUrl,
		chatRoomType,
		roomParticipantIds,
	});

	return data;
};

const exitChatRoom = async chatRoomId => {
	const { data } = await axiosInstance.post(`${API_PATH.CHAT}/exit`, {
		chatRoomId,
	});
	return data;
};

const patchChatRoom = async ({ chatRoomId, title, imageUrl }) => {
	try {
		const { data } = await axiosInstance.patch(`${API_PATH.CHAT}`, {
			chatRoomId,
			title,
			imageUrl,
		});

		console.log(data);

		return data;
	} catch (err) {
		console.log(err);
	}
};

export { getChatRooms, createChatRoom, exitChatRoom, patchChatRoom };
