import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { exitChatRoom } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useExitChatRoom = () => {
	return useMutation({
		mutationFn: exitChatRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.CHATROOMS],
			});
		},
	});
};

export default useExitChatRoom;
