import { useQuery } from '@tanstack/react-query';

import { getMyFamilySpaceId } from '@/apis/family';
import { QUERY_KEYS } from '@/constants';

const useFamilySpaceId = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY_SPACE_ID],
		queryFn: getMyFamilySpaceId,
		select: data => data.result,
	});
};

export default useFamilySpaceId;
