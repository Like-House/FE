import axiosInstance from '@/apis/axios';

function setHeader(key, value) {
	axiosInstance.defaults.headers.common[key] = 'Bearer ' + value;
}

function removeHeader(key) {
	if (!axiosInstance.defaults.headers.common[key]) {
		return;
	}

	delete axiosInstance.defaults.headers.common[key];
}

export { setHeader, removeHeader };
