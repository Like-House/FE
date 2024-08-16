import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getDailySchedule } from '@/apis';

const useGetDailySchedule = ({ date }) => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.SCHEDULE, date],
		queryFn: ({ pageParam }) =>
			getDailySchedule({ date, cursor: pageParam, size: 3 }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			if (lastPage.result.nextCursor === -1) {
				return undefined;
			}
			return lastPage.result.nextCursor;
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!date,
		select: data => data.pages,
	});
};

export default useGetDailySchedule;
