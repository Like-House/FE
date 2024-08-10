import { create } from 'zustand';

const useUserIdStore = create(set => ({
	userId: null,
	setUserId: id => set({ userId: id }),
}));

export default useUserIdStore;
