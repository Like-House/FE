import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { login } from '@/apis';
import { PAGE_PATH, QUERY_KEYS } from '@/constants';
import useAuthStore from '@/store/useAuthStore';
import queryClient from '@/apis/queryClient';

const useLogin = () => {
	const navigation = useNavigate();
	const { setIsAuthenticated } = useAuthStore();

	return useMutation({
		mutationFn: login,
		onSuccess: () => {
			navigation(`${PAGE_PATH.BASE}`);
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
			setIsAuthenticated(true);
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
