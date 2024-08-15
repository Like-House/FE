import { create } from 'zustand';

const useModalStore = create(set => ({
	chatModal: false,
	fileModal: false,
	deleteState: false,

	open: () =>
		set(state => ({
			chatModal: !state.chatModal,
		})),

	fileOpen: () =>
		set(state => ({
			fileModal: !state.fileModal,
		})),

	setDelete: () =>
		set(state => ({
			deleteState: !state.deleteState,
		})),
}));

export default useModalStore;
