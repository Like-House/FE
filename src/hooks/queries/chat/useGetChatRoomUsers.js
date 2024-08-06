import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getChatRoomUsers } from '../../../apis/chat';

const useGetChatRoomUsers = chatRoomId => {
	return useQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'users'],
		queryFn: () => getChatRoomUsers(chatRoomId),
		staleTime: Infinity,
		select: data => data.result.chatRoomUserResponses,
	});
};

export default useGetChatRoomUsers;
