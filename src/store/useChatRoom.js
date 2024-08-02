import { create } from 'zustand';

const useChatRoom = create(set => ({
	chatRoomId: null,
	chatTitle: '',
	chatImg: '',

	clear: () =>
		set(() => ({
			chatRoomId: null,
			chatTitle: '',
			chatImg: '',
		})),
	setChatRoom: ({ chatRoomId, chatTitle, chatImg }) =>
		set(() => ({
			chatRoomId,
			chatTitle,
			chatImg,
		})),
}));

export { useChatRoom };
