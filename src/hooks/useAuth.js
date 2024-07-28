import { useEffect, useState } from 'react';
import axiosInstance from '../apis/axios';

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			axiosInstance.defaults.headers.common['Authorization'] =
				`Bearer ${token}`;
			setIsAuthenticated(true);
		}
	}, []);

	return isAuthenticated;
};

export default useAuth;
