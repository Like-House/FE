import { create } from 'zustand';

const useModalStore = create(set => ({
	chatModal: false,
	open: () =>
		set(state => ({
			chatModal: !state.chatModal,
		})),
}));

export default useModalStore;
