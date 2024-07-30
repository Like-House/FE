import { useEffect } from 'react';
import axiosInstance from '../apis/axios';

const useAuthToken = () => {
	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			axiosInstance.defaults.headers.common['Authorization'] =
				`Bearer ${token}`;
		}
	}, []);
};

export default useAuthToken;
