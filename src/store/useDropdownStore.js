import { create } from 'zustand';

const useDropdownStore = create(set => ({
	chatDropdown: false,
	chatDropdownOpen: () =>
		set(state => ({
			chatDropdown: !state.chatDropdown,
		})),
}));

export default useDropdownStore;
