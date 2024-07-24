import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const navigation = useNavigate();
	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			console.log(data);
			navigation('/');
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
