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

const getSingleSchedule = async ({ scheduleId }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/${scheduleId}`,
	);

	return data;
};

const getDailySchedule = async ({ date, cursor = 1, size = 5 }) => {
	const params = new URLSearchParams();
	params.append('date', date);
	params.append('cursor', cursor);
	params.append('size', size);

	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/date?${params.toString()}`,
	);
	return data;
};

const getMonthlySchedule = async ({ yearMonth }) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.SCHEDULE}/month?yearMonth=${yearMonth}`,
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

const deleteSchedule = async ({ scheduleId }) => {
	const { data } = await axiosInstance.delete(
		`${API_PATH.SCHEDULE}/${scheduleId}`,
	);
	return data;
};

export {
	createSchedule,
	patchSchedule,
	getSingleSchedule,
	getMonthlySchedule,
	getDailySchedule,
	deleteSchedule,
};
