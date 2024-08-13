import { useQuery } from '@tanstack/react-query';

import { getRealImageUrl } from '@/apis/image';
import { QUERY_KEYS } from '@/constants';

const useGetEmoticonImg = ({ imageUrl, familyEmoticonId }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.EMOTICONS, familyEmoticonId],
		select: data => data.result,
		enabled: !!imageUrl,
	});
};

export default useGetEmoticonImg;
