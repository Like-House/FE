import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const createSchedule = async ({ date, scheduleType, title, content }) => {
	const { data } = await axiosInstance.post(`${API_PATH.SCHEDULE}`, {
		date,
		dtype: scheduleType,
		title,
		content,
	});

	return data;
};

const getOneSchedule = async ({ scheduleId }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/${scheduleId}`,
	);

	return data;
};

const getDailySchedule = async ({ date, cursor, size }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/date?date=${date}&cursor=${cursor}&size=${size}`,
	);

	return data;
};

const getMonthlySchedule = async ({ yearMonth, page, size }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/month?yearMonth=${yearMonth}&page=${page}&size=${size}`,
	);

	return data;
};

const patchSchedule = async ({ scheduleId, date, dtype, title, content }) => {
	try {
		const { data } = await axiosInstance.patch(
			`${API_PATH.SCHEDULE}/${scheduleId}`,
			{
				date,
				dtype,
				title,
				content,
			},
		);

		return data;
	} catch (err) {
		console.log(err);
	}
};

export {
	createSchedule,
	patchSchedule,
	getOneSchedule,
	getMonthlySchedule,
	getDailySchedule,
};
