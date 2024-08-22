import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { unBlockUser } from '@/apis/user';
import { QUERY_KEYS } from '@/constants';

const useUnblockFamilyMember = () => {
	return useMutation({
		mutationFn: unBlockUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAMILY] });
		},
	});
};

export default useUnblockFamilyMember;
