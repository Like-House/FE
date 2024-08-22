import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/key';
import { getMyPosts } from '@/apis/index.js';

const useGetMyPosts = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.MY_POSTS],
		queryFn: ({ pageParam }) => getMyPosts({ pageParam }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			return lastPage?.result.nextCursor !== -1
				? lastPage?.result.nextCursor
				: undefined;
		},
		select: data => data.pages,
	});
};

export default useGetMyPosts;
