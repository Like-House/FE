import { deleteEmoticon } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import theme from '@/theme/theme';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const useDeleteEmoticon = () => {
	return useMutation({
		mutationFn: deleteEmoticon,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EMOTICONS],
			});
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

export default useDeleteEmoticon;
