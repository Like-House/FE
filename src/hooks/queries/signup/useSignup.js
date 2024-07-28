import { useMutation } from '@tanstack/react-query';
import { signup } from '../../../apis';

const useSignup = () => {
	return useMutation({
		mutationFn: signup,
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useSignup };
