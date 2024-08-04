import { create } from 'zustand';
import axiosInstance from '../apis/axios';
import { getAuthToken } from '../utils/token';

const useAuthStore = create(set => ({
	isAuthenticated: getAuthToken() ? true : false,
	login: token => {
		localStorage.setItem('accessToken', token);
		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		set({ isAuthenticated: true });
	},
	logout: () => {
		localStorage.clear();
		delete axiosInstance.defaults.headers.common['Authorization'];
		set({ isAuthenticated: false });
	},
}));

export default useAuthStore;
