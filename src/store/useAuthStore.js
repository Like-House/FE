import { create } from 'zustand';
import { getAuthToken } from '../utils/token.js';

const isToken = getAuthToken();

const useAuthStore = create(set => ({
	isAuthenticated: isToken ? true : false,
	setIsAuthenticated: status => set(() => ({ isAuthenticated: status })),
}));

export default useAuthStore;
