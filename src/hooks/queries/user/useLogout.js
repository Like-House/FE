import { useMutation } from '@tanstack/react-query';

import { logout } from '@/apis';
import queryClient from '@/apis/queryClient';

const useLogout = () => {
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.clear();
		},
	});
};

export default useLogout;
