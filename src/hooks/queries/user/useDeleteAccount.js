import { useMutation } from '@tanstack/react-query';
import { deleteAccount } from '../../../apis';
import queryClient from '../../../apis/queryClient';
import useAuthStore from '../../../store/useAuthStore';
import { QUERY_KEYS } from '../../../constants';

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
