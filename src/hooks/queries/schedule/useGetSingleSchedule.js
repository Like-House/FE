import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { getSingleSchedule } from '@/apis';

const useGetSingleSchedule = ({ scheduleId }) => {
	return useQuery({
		queryKey: [QUERY_KEYS.SCHEDULE, scheduleId],
		queryFn: () => getSingleSchedule({ scheduleId }),
		staleTime: 1000 * 60 * 30,
		enabled: !!scheduleId,
		select: data => data.result,
	});
};

export default useGetSingleSchedule;
