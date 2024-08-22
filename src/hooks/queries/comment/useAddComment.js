import { useMutation } from '@tanstack/react-query';
import { addComment } from '@/apis/post';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { toast } from 'sonner';
import theme from '@/theme/theme';

const useAddComment = postId => {
	return useMutation({
		mutationFn: addComment,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS, postId] }),
		onError: error => {
			error.response &&
				toast.error(error.response.data.message, {
					duration: 1200,
					style: {
						color: theme.COLOR.COMMON.WHITE,
						backgroundColor: theme.COLOR.COMMON.RED,
					},
				});
		},
	});
};

export default useAddComment;
