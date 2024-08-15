import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';

import { deleteAccount } from '@/apis';
import useAuthStore from '@/store/useAuthStore';

const useDeleteAccount = () => {
	const { setIsAuthenticated } = useAuthStore();

	return useMutation({
		mutationFn: deleteAccount,
		onSuccess: () => {
			localStorage.clear();
			queryClient.clear();
			setIsAuthenticated(false);
		},
	});
};

export default useDeleteAccount;
