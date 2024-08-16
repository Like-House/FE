import { getMyFamilySpaceId } from '@/apis';
import { QUERY_KEYS } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const useEnterFamily = isAuthenticated => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY_SPACE_ID],
		queryFn: getMyFamilySpaceId,
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
		enabled: !!isAuthenticated,
	});
};

export default useEnterFamily;
