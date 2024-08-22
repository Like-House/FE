import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { deletePost } from '@/apis';
import { toast } from 'sonner';
import theme from '@/theme/theme';

const useDeletePost = () => {
	return useMutation({
		mutationFn: deletePost,
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.POSTS]);
		},
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

export default useDeletePost;
