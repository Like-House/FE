import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';

import { deleteAccount } from '@/apis';
import { QUERY_KEYS } from '@/constants';
import useAuthStore from '@/store/useAuthStore';

const useDeleteAccount = () => {
	const { setIsAuthenticated } = useAuthStore();

	return useMutation({
		mutationFn: deleteAccount,
		onSuccess: () => {
			localStorage.clear();
			queryClient.removeQueries({ queryKey: [QUERY_KEYS.USER] });
			setIsAuthenticated(false);
		},
	});
};

export default useDeleteAccount;
