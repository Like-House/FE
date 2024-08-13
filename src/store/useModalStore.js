import { create } from 'zustand';

const useModalStore = create(set => ({
	chatModal: false,
	fileModal: false,
	open: () =>
		set(state => ({
			chatModal: !state.chatModal,
		})),

	fileOpen: () =>
		set(state => ({
			fileModal: !state.fileModal,
		})),
}));

export default useModalStore;
