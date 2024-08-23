import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS, PAGE_PATH } from '@/constants';
import { deletePost } from '@/apis';
import { toast } from 'sonner';
import theme from '@/theme/theme';
import { useLocation, useNavigate } from 'react-router-dom';

const useDeletePost = () => {
	const { pathname } = useLocation();
	const nav = useNavigate();

	return useMutation({
		mutationFn: deletePost,
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.POSTS]);
			if (pathname.startsWith(`${PAGE_PATH.HOME}/${PAGE_PATH.DETAILPOST}`)) {
				nav(`${PAGE_PATH.HOME}`);
			}
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
