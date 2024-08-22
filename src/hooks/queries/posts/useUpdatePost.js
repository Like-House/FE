import { useMutation } from '@tanstack/react-query';
import { updatePost } from '@/apis/post';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';

const useUpdatePost = () => {
	return useMutation({
		mutationFn: updatePost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
		},
	});
};

export default useUpdatePost;
