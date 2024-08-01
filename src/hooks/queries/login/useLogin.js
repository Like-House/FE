import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
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
			navigation(`${PAGE_PATH.BASE}`);
			setIsAuthenticated(true);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
