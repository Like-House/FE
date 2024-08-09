import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyPosts } from '../../../apis/posts';
import { QUERY_KEYS } from '../../../constants/key';

const useGetMyPosts = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MY_POSTS],
    queryFn: getMyPosts,
    getNextPageParam: (lastPage) => {
      return lastPage?.nextCursor !== -1 ? lastPage?.nextCursor : undefined;
    },
  });
};

export default useGetMyPosts;
