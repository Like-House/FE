import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signup } from '@/apis';
import { PAGE_PATH } from '@/constants';

const useSignup = () => {
	const navigation = useNavigate();
	return useMutation({
		mutationFn: signup,
		onSuccess: () => {
			navigation(`/${PAGE_PATH.LOGIN}`);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useSignup };
