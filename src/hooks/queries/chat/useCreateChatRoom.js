import { useMutation } from '@tanstack/react-query';
import { createChatRoom } from '../../../apis';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';

const useCreateChatRoom = () => {
	return useMutation({
		mutationFn: createChatRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHATROOMS] });
		},
	});
};

export default useCreateChatRoom;
