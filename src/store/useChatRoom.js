import { create } from 'zustand';

const useChatRoom = create(set => ({
	chatRoomId: null,
	chatTitle: '',
	chatImg: '',

	changeRoomInfo: false,

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

	setChangeRoomInfo: () =>
		set(state => ({
			changeRoomInfo: !state.changeRoomInfo,
		})),
}));

export { useChatRoom };
