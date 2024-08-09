import { useInfiniteQuery } from '@tanstack/react-query';
import { getChatMessage } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';
import useWebSocketStore from '../../../store/useWebSocketStore';

const useGetMessage = ({ chatRoomId, take }) => {
	const { enter } = useWebSocketStore();

	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'message'],
		initialPageParam: 1,
		queryFn: ({ pageParam }) =>
			getChatMessage({ chatRoomId, cursor: pageParam, take }),
		enabled: !!enter,
		select: data => data.pages,
		getNextPageParam: lastPage => {
			console.log(lastPage.result);
			return lastPage.result.hasNext ? lastPage.result.nextCursor : undefined;
		},
		staleTime: 10 * 1000,
		cacheTime: 5 * 60 * 1000,
	});
};

export default useGetMessage;
