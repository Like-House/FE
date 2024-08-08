import { useQuery } from '@tanstack/react-query';
import { getChatMessage } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';
import useWebSocketStore from '../../../store/useWebSocketStore';

const useGetMessage = ({ chatRoomId, cursor, take }) => {
	const { enter } = useWebSocketStore();
	return useQuery({
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'message'],
		queryFn: () => getChatMessage({ chatRoomId, cursor, take }),
		enabled: !!enter,
		select: data => data.result,
	});
};

export default useGetMessage;
