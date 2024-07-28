import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { setHeader } from '../../../utils';
import { PAGE_PATH } from '../../../constants';

const useLogin = () => {
	const navigation = useNavigate();

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			localStorage.setItem('accessToken', data.result.accessToken);
			setHeader('Authorization', `Bearer ${data.result.accessToken}`);
			navigation(`${PAGE_PATH.BASE}`);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
