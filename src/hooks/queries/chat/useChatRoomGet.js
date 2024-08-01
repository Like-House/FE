import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getChatRooms } from '../../../apis';

const useChatRoomGet = (familySpaceId, cursor, take) => {
	return useQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, familySpaceId],
		queryFn: () => getChatRooms(familySpaceId, cursor, take),
	});
};

export default useChatRoomGet;
