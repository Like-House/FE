import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

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

// axiosInstance.interceptors.response.use(
// 	function (response) {
// 		return response;
// 	},
// 	async function (err) {
// 		const originalConfig = err.config;
// 		console.log(originalConfig, err);
// 	},
// );

export default axiosInstance;
