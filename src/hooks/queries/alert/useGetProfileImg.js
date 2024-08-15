import { useQuery } from '@tanstack/react-query';

import { getRealImageUrl } from '@/apis/image';
import { QUERY_KEYS } from '@/constants';

const useGetProfileImg = ({ imageUrl }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.ALERT, imageUrl],
	});
};

export default useGetProfileImg;
