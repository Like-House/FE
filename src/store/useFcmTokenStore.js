import { create } from 'zustand';

const useFcmTokenStore = create(set => ({
	fcmToken: '',
	setFcmToken: token => set(() => ({ fcmToken: token })),
}));

export default useFcmTokenStore;
