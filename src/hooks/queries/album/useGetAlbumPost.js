import { useQuery } from '@tanstack/react-query';
import { getAlbumPost } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';

const useGetAlbumPost = postId => {
	return useQuery({
		queryKey: [QUERY_KEYS.POST_ID, postId],
		queryFn: () => getAlbumPost(postId),
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
		enabled: !!postId,
	});
};

export default useGetAlbumPost;
