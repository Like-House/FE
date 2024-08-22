import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';
import { likePost } from '@/apis';
import useUnlikePost from './useUnLikePost';
import { QUERY_KEYS } from '@/constants';

const useLikePost = postId => {
	const { mutate } = useUnlikePost();
	return useMutation({
		mutationFn: likePost,
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.POSTS]);
		},
		onError: error => {
			if (error?.response.data.code === 'POSTLIKE4001') {
				mutate(postId);
			}
		},
	});
};

export default useLikePost;
