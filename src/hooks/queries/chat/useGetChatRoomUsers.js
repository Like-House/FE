import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getChatRoomUsers } from '../../../apis/chat';

const useGetChatRoomUsers = chatRoomId => {
	return useQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'users'],
		queryFn: () => getChatRoomUsers(chatRoomId),
		staleTime: 1000 * 30 * 60,
		select: data => data.result.chatRoomUserResponses,
	});
};

export default useGetChatRoomUsers;
