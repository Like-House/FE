import { create } from 'zustand';
import { removeHeader, setHeader } from '../utils';
import axiosInstance from '../apis/axios';

const useAuthStore = create(set => ({
	isLoggedIn: false,
	userData: null,

	setLoggedIn: data => {
		setHeader('Authorization', data.result.accessToken);
		set({ isLoggedIn: true, userData: data });
	},
	setLoggedOut: () => {
		removeHeader('Authorization');
		set({ isLoggedIn: false, userData: null });
	},
	checkAuth: () => {
		const token = axiosInstance.defaults.headers.common['Authorization'];
		if (token) {
			set({ isLoggedIn: true });
		} else {
			set({ isLoggedIn: false });
		}
	},
}));

export default useAuthStore;
