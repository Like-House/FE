import { useMutation } from '@tanstack/react-query';

import { logout } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';

const useLogout = () => {
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: [QUERY_KEYS.USER] });
		},
	});
};

export default useLogout;
