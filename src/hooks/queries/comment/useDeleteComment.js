import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { toast } from 'sonner';
import theme from '@/theme/theme';

const useDeleteComment = postId => {
	return useMutation({
		mutationFn: deleteComment,
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

export default useDeleteComment;
