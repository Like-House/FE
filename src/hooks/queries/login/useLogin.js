import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { setHeader } from '../../../utils';

const useLogin = () => {
	const navigation = useNavigate();
	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			setHeader('Authorization', data.result.accessToken);
			navigation('/');
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
