import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { getMonthlySchedule } from '@/apis';

const useGetMonthlySchedule = ({ yearMonth }) => {
	return useQuery({
		queryKey: [QUERY_KEYS.SCHEDULE],
		queryFn: () => getMonthlySchedule({ yearMonth }),
		staleTime: 1000 * 60 * 30,
		enabled: !!yearMonth,
		select: data => data.result,
	});
};

export default useGetMonthlySchedule;
