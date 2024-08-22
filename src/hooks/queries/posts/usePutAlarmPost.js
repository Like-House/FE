import { putAlarmPost } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

const usePutAlarmPost = () => {
	return useMutation({
		mutationFn: putAlarmPost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
		},
	});
};

export default usePutAlarmPost;
