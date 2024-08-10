import axiosInstance from './axios';
import { API_PATH } from '../constants';

const getFamilyList = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);
	return data;
};

const createFamilyspace = async () => {
	const { data } = await axiosInstance.post(`${API_PATH.FAMILY_SPACE}`);

	return data;
};

const enterFamilySpace = async familySpaceId => {
	const { data } = await axiosInstance.post(`${API_PATH.FAMILY_SPACE}/enter/
	${familySpaceId}?familySpaceId=${familySpaceId}`);

	return data;
};

const checkSpaceCode = async familySpaceCode => {
	const { data } = await axiosInstance.post(
		`${API_PATH.FAMILY_SPACE}/check?familySpaceCode=${familySpaceCode}`,
	);

	return data;
};

export { getFamilyList, createFamilyspace, enterFamilySpace, checkSpaceCode };
