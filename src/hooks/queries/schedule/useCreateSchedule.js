import { useMutation } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { createSchedule } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useCreateSchedule = () => {
	return useMutation({
		mutationFn: createSchedule,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
		},
	});
};

export default useCreateSchedule;
