import axiosInstance from './axios';
import { API_PATH } from '@/constants';

const getAlert = async ({
	familySpaceId,
	notificationRequestType,
	cursor,
	take,
}) => {
	const { data } = await axiosInstance.get(
		`${API_PATH.ALERT}/${familySpaceId}/notifications?notificationRequestType=${notificationRequestType}&cursor=${cursor}&take=${take}`,
	);
	return data;
};

export { getAlert };
