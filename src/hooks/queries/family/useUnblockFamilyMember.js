import { useMutation } from '@tanstack/react-query';
import { unBlockUser } from '../../../apis/user';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';

const useUnblockFamilyMember = () => {
	return useMutation({
		mutationFn: unBlockUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAMILY] });
		},
	});
};

export default useUnblockFamilyMember;
