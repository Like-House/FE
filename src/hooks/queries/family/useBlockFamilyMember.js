import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { blockUser } from '@/apis/user';
import { QUERY_KEYS } from '@/constants';

const useBlockFamilyMember = () => {
	return useMutation({
		mutationFn: blockUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAMILY] });
		},
		onError: error => {
			alert(error.response?.data?.message);
		},
	});
};

export default useBlockFamilyMember;
