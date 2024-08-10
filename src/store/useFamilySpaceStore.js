import { create } from 'zustand';

const useFamilySpaceStore = create(set => ({
	familySpaceId: '',
	setFamilySpaceId: familySpaceId =>
		set(() => ({
			familySpaceId,
		})),
}));

export default useFamilySpaceStore;
