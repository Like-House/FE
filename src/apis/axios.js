import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

/**
 * axiosInstance 실행 전에, 토큰을 넣음.
 */
axiosInstance.interceptors.request.use(
	config => {
		config.headers['Authorization'] =
			`Bearer ${localStorage.getItem('accessToken')}`;
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
