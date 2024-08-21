import { patchComment } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import theme from '@/theme/theme';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const usePatchComment = postId => {
	return useMutation({
		mutationFn: patchComment,
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

export default usePatchComment;
