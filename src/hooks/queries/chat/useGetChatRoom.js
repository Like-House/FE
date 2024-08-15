import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { getChatRooms } from '@/apis';

const useGetChatRoom = ({ familySpaceId, take }) => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.CHATROOMS],
		queryFn: ({ pageParam }) =>
			getChatRooms({ familySpaceId, cursor: pageParam, take }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			return lastPage.result.hasNext ? lastPage.result.nextCursor : undefined;
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!familySpaceId,
		select: data => data.pages,
	});
};

export default useGetChatRoom;
