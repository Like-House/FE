import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { QUERY_KEYS } from '@/constants';
import { patchSchedule } from '@/apis';

const usePatchSchedule = () => {
	return useMutation({
		mutationFn: ({ scheduleId, date, dtype, title, content }) =>
			patchSchedule({ scheduleId, date, dtype, title, content }),
		onSuccess: () => {
			queryClient.resetQueries({
				queryKey: [QUERY_KEYS.SCHEDULE],
			});
		},
	});
};

export default usePatchSchedule;
