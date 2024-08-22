import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

import { getChatMessage } from '@/apis';
import { QUERY_KEYS } from '@/constants';
import useWebSocketStore from '@/store/useWebSocketStore';

const useGetMessage = ({ chatRoomId, take }) => {
	const { enter } = useWebSocketStore();

	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'message'],
		initialPageParam: 1,
		placeholderData: keepPreviousData,
		queryFn: ({ pageParam }) =>
			getChatMessage({ chatRoomId, cursor: pageParam, take }),
		enabled: !!enter,
		select: data => data.pages,
		getPreviousPageParam: firstPage => {
			return firstPage.result.hasNext ? firstPage.result.nextCursor : undefined;
		},
		getNextPageParam: () => undefined,
		staleTime: 10 * 1000,
	});
};

export default useGetMessage;
