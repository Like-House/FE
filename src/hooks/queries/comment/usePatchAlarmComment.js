import { patchAlarmcomment } from '@/apis';
import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

const usePatchAlarmComment = postId => {
	return useMutation({
		mutationFn: patchAlarmcomment,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS, postId] });
		},
	});
};

export default usePatchAlarmComment;
