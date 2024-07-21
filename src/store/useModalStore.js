import { create } from 'zustand';

const useModalStore = create(set => ({
	navModal: false,
	open: () =>
		set(state => ({
			navModal: !state.navModal,
		})),
}));

export default useModalStore;
