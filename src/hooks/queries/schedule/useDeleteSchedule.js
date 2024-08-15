import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';

import { deleteSchedule } from '@/apis';

const useDeleteSchedule = () => {
	return useMutation({
		mutationFn: deleteSchedule,
		onSuccess: () => {
			queryClient.invalidateQueries(['getDailySchedule']);
			queryClient.invalidateQueries(['getMonthlySchedule']);
		},
	});
};

export default useDeleteSchedule;
