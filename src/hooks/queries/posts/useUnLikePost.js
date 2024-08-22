import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';
import { unLikePost } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useUnlikePost = () => {
	return useMutation({
		mutationFn: unLikePost,
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.POSTS]);
		},
	});
};

export default useUnlikePost;
