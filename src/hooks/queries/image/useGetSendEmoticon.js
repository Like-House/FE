import { useQuery } from '@tanstack/react-query';

import { getRealImageUrl } from '@/apis/image';
import { QUERY_KEYS } from '@/constants';

const useGetSendEmoticon = ({ imageUrl }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.CHATROOMS, imageUrl],
		select: data => data.result,
		enabled: !!imageUrl,
	});
};

export default useGetSendEmoticon;
