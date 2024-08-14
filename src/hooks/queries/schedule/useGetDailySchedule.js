import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { getDailySchedule } from '@/apis';

const useGetDailySchedule = ({ date, cursor, size }) => {
	return useQuery({
		queryKey: [QUERY_KEYS.SCHEDULE, date],
		queryFn: () => getDailySchedule({ date, cursor, size }),
		staleTime: 1000 * 60 * 30,
		enabled: !!date,
		select: data => data.result,
	});
};

export default useGetDailySchedule;
