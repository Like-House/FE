import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { setHeader } from '../../../utils';
import { PAGE_PATH } from '../../../constants';
import useAuthStore from '../../../store/useAuthStore';

const useLogin = () => {
	const navigation = useNavigate();
	const { setIsAuthenticated } = useAuthStore();

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			const accessToken = data.result.accessToken;
			localStorage.setItem('accessToken', accessToken);
			setHeader('Authorization', accessToken);
			console.log(setHeader('Authorization', accessToken));
			navigation(`${PAGE_PATH.BASE}`);
			setIsAuthenticated(true);
		},
		onSettled: data => {
			const accessToken = data.result.accessToken;
			setHeader('Authorization', accessToken);
			console.log('settled');
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
