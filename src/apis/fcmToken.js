import axiosInstance from '@/apis/axios.js';

import { API_PATH } from '@/constants/index.js';

const postFcmToken = async token => {
	const { data } = await axiosInstance.post(`${API_PATH.FCM}`, {
		fcmToken: token,
	});

	return data;
};

export { postFcmToken };
