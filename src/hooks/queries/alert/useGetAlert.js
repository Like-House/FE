import { useQuery } from '@tanstack/react-query';

import { getAlert } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useGetAlert = ({
	familySpaceId,
	notificationRequestType,
	cursor,
	take,
}) => {
	return useQuery({
		queryKey: [QUERY_KEYS.ALERT, familySpaceId, notificationRequestType],
		queryFn: () =>
			getAlert({ familySpaceId, notificationRequestType, cursor, take }),
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
		enabled: !!familySpaceId,
	});
};

export default useGetAlert;
