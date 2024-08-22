import { useQuery } from '@tanstack/react-query';

import { getRealImageUrl } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useGetFamilyImg = (imageUrl, userId) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.FAMILY, QUERY_KEYS.USERIMG, userId],
		select: data => data.result,
		enabled: !!imageUrl,
	});
};

export default useGetFamilyImg;
