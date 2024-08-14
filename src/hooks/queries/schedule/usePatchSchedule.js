import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { patchSchedule } from '@/apis';

const usePatchSchedule = ({ scheduleId }) => {
	return useMutation({
		mutationFn: patchSchedule(scheduleId),
		onSuccess: () => {
			queryClient.resetQueries({
				queryKey: [QUERY_KEYS.SCHEDULE, scheduleId],
			});
		},
	});
};

export default usePatchSchedule;
