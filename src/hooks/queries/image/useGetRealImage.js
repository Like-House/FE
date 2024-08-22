import { useQuery } from '@tanstack/react-query';

import { getRealImageUrl } from '@/apis/image';
import { QUERY_KEYS } from '@/constants';

const useGetRealImageUrl = ({ imageUrl, chatRoomId }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId],
	});
};

export default useGetRealImageUrl;
