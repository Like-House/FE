import { useEffect, useState } from 'react';

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

	return isAuthenticated;
};

export default useAuth;
