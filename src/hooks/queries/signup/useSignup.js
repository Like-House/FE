import { useMutation } from '@tanstack/react-query';
import { signup } from '../../../apis';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
	const navigation = useNavigate();
	return useMutation({
		mutationFn: signup,
		onSuccess: () => {
			navigation('/login');
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useSignup };
