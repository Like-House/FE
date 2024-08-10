import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/key';
import { getMyPosts } from '@/apis/index.js';

const useGetMyPosts = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.MY_POSTS],
		queryFn: getMyPosts,
		getNextPageParam: lastPage => {
			return lastPage?.nextCursor !== -1 ? lastPage?.nextCursor : undefined;
		},
	});
};

export default useGetMyPosts;
