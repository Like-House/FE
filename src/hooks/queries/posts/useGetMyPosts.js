import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyPosts } from '../../../apis/posts';
import { QUERY_KEYS } from '../../../constants/key';

const useGetMyPosts = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MY_POSTS],
    queryFn: getMyPosts,
    getNextPageParam: (lastPage, allPages) => {
      const morePagesExist = lastPage?.length === 20;
      if (!morePagesExist) return undefined;
      return allPages.length + 1;
    },
  });
};

export default useGetMyPosts;
