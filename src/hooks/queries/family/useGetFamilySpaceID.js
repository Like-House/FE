import { useQuery } from '@tanstack/react-query';

import { getMyFamilySpaceId } from '@/apis';
import { QUERY_KEYS } from '@/constants';

const useGetFamilySpaceId = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY_SPACE_ID],
		queryFn: getMyFamilySpaceId,
		staleTime: 1000 * 30 * 60,
		select: data => data.result,
	});
};

export default useGetFamilySpaceId;
