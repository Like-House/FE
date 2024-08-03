import { useMutation } from '@tanstack/react-query';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';
import { patchChatRoom } from '../../../apis';

const usePatchChatRoom = () => {
	return useMutation({
		mutationFn: patchChatRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHATROOMS] });
		},
	});
};

export default usePatchChatRoom;
