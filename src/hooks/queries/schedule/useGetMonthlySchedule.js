import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { getMonthlySchedule } from '@/apis';

const useGetMonthlySchedule = ({ yearMonth, size }) => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.SCHEDULE],
		queryFn: ({ pageParam }) =>
			getMonthlySchedule({ yearMonth, page: pageParam, size }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.result.isLast ? undefined : allPages.length + 1;
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!yearMonth,
		select: data => data.pages,
	});
};

export default useGetMonthlySchedule;
