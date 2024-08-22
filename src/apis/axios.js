import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

/**
 * axiosInstance 실행 전에, 토큰을 넣음.
 */
// axiosInstance.interceptors.request.use(
// 	config => {
// 		const token = localStorage.getItem('accessToken');
// 		if (token) {
// 			config.headers['Authorization'] = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	error => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	},
// );

export default axiosInstance;
