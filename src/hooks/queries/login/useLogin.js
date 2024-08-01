import { useMutation } from '@tanstack/react-query';
import { kakaoLogin, login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { setHeader } from '../../../utils';
import { PAGE_PATH } from '../../../constants';
import useAuthStore from '../../../store/useAuthStore';

const useLogin = () => {
	const navigation = useNavigate();
	const { login: authLogin } = useAuthStore();

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			localStorage.setItem('accessToken', data.result.accessToken);
			setHeader('Authorization', `Bearer ${data.result.accessToken}`);
			navigation(`${PAGE_PATH.BASE}`);
			authLogin(data.result.accessToken);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

const useKakaoLogin = () => {
	const navigation = useNavigate();
	const { login: authLogin } = useAuthStore();

	return useMutation({
		mutationFn: kakaoLogin,
		onSuccess: data => {
			localStorage.setItem('accessToken', data.access_token);
			setHeader('Authorization', `Bearer ${data.access_token}`);
			navigation(`${PAGE_PATH.BASE}`);
			authLogin(data.access_token);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};
export { useLogin, useKakaoLogin };
