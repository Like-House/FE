import axiosInstance from './axios';

import { API_PATH } from '@/constants';

const getFamilyList = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY}`);

	return data;
};

const getMyFamilySpaceId = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY_SPACE}`);

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

const getFamilySpaceId = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY_SPACE_ID}`);
	return data;
};

const updateFamilyMember = async (userId, data) => {
	const response = await axiosInstance.patch(
		`${API_PATH.FAMILY}/${userId}`,
		data,
	);
	return response.data;
};

const deleteFamilySpace = async () => {
	const { data } = await axiosInstance.delete(`${API_PATH.FAMILY_SPACE}`);
	return data;
};

const regenerateInviteCode = async () => {
	const { data } = await axiosInstance.patch(`${API_PATH.FAMILY_SPACE}`);
	return data;
};

const getInviteCode = async () => {
	const { data } = await axiosInstance.get(`${API_PATH.FAMILY_SPACE}/code`);
	return data;
};

export {
	getFamilyList,
	getMyFamilySpaceId,
	createFamilyspace,
	enterFamilySpace,
	checkSpaceCode,
	getFamilySpaceId,
	updateFamilyMember,
	deleteFamilySpace,
	regenerateInviteCode,
	getInviteCode,
};
