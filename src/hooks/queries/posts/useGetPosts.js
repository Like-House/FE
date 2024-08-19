import { useInfiniteQuery } from '@tanstack/react-query';

import { getPosts } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useGetPosts = ({ familySpaceId, size }) => {
	return useInfiniteQuery({
		queryFn: ({ pageParam }) =>
			getPosts({ familySpaceId, page: pageParam, size }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			if (lastPage.result.nextCursor === -1) {
				return undefined;
			}
			return lastPage.result.nextCursor;
		},
		queryKey: [QUERY_KEYS.POSTS],
		enabled: !!familySpaceId,
		select: data => data.pages,
		staleTime: 1000 * 60 * 30,
	});
};

export default useGetPosts;
