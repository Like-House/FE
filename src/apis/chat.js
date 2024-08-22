import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const getChatRooms = async ({ familySpaceId, cursor, take }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.CHAT}?familySpaceId=${familySpaceId}&cursor=${cursor}&take=${take}`,
	);

	return data;
};

const createChatRoom = async ({
	familySpaceId,
	title,
	imageKeyName,
	chatRoomType,
	roomParticipantIds,
}) => {
	const { data } = await axiosInstance.post(`${API_PATH.CHAT}`, {
		familySpaceId,
		title,
		imageKeyName,
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

const patchChatRoom = async ({ chatRoomId, title, imageKeyName }) => {
	try {
		const { data } = await axiosInstance.patch(`${API_PATH.CHAT}`, {
			chatRoomId,
			title,
			imageKeyName,
		});

		return data;
	} catch (err) {
		console.log(err);
	}
};

const getChatRoomUsers = async chatRoomId => {
	const { data } = await axiosInstance.get(
		`${API_PATH.CHAT}/${chatRoomId}/users`,
	);

	return data;
};

const getChatMessage = async ({ chatRoomId, cursor, take }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.CHAT}/${chatRoomId}/chats?cursor=${cursor}&take=${take}`,
	);

	return data;
};

// emoticon
const postEmoticon = async ({ familySpaceId, imageKeyName }) => {
	const { data } = await axiosInstance.post(`${API_PATH.EMOTICON}`, {
		familySpaceId,
		imageKeyName,
	});
	return data;
};

const getEmoticon = async ({ familySpaceId }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.FAMILY_SPACE}/${familySpaceId}/family-emoticon`,
	);

	return data;
};

const deleteEmoticon = async ({ familySpaceId, familyEmoticonId }) => {
	const { data } = await axiosInstance.delete(
		`${API_PATH.FAMILY_SPACE}/${familySpaceId}/family-emoticon/${familyEmoticonId}`,
	);

	return data;
};

export {
	getChatRooms,
	createChatRoom,
	exitChatRoom,
	patchChatRoom,
	getChatRoomUsers,
	getChatMessage,
	postEmoticon,
	getEmoticon,
	deleteEmoticon,
};
