import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/apis/post';
import { QUERY_KEYS } from '@/constants';

const useGetPostById = postId => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS, postId],
		queryFn: () => getPostById(postId),
		select: data => data.result,
	});
};

export default useGetPostById;
