import { useMutation } from '@tanstack/react-query';
import { logout } from '../../../apis';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';
import useAuthStore from '../../../store/useAuthStore';

const useLogout = () => {
	const { setIsAuthenticated } = useAuthStore();
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			localStorage.clear();
			queryClient.removeQueries(QUERY_KEYS.USER);
			setIsAuthenticated(false);
		},
	});
};

export default useLogout;
