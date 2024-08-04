import { useMutation } from '@tanstack/react-query';
import { exitChatRoom } from '../../../apis';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';

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
