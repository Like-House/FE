import { useInfiniteQuery } from '@tanstack/react-query';

import { getPosts } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useGetPosts = ({ familySpaceId, size }) => {
	return useInfiniteQuery({
		queryFn: ({ pageParam }) =>
			getPosts({ familySpaceId, cursor: pageParam, size }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			return lastPage.result.nextCursor !== -1
				? lastPage.result.nextCursor
				: undefined;
		},
		queryKey: [QUERY_KEYS.POSTS],
		enabled: !!familySpaceId,
		select: data => data.pages,
		staleTime: 1000 * 60 * 30,
	});
};

export default useGetPosts;
