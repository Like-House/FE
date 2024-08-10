import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getChatRooms } from '../../../apis';

const useGetChatRoom = ({ familySpaceId, cursor, take }) => {
	return useQuery({
		queryKey: [QUERY_KEYS.CHATROOMS],
		queryFn: () => getChatRooms({ familySpaceId, cursor, take }),
		staleTime: 1000 * 60 * 30,
		enabled: !!familySpaceId,
		select: data => data.result,
	});
};

export default useGetChatRoom;
