import { create } from 'zustand';

const useModal = create(set => {
	false;
	() => set({ isOpen: true });
	() => set({ isOpen: false });
});

export default useModal;
