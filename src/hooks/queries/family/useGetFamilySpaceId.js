import { useQuery } from '@tanstack/react-query';

import { getMyFamilySpaceId } from '@/apis';

const useGetFamilySpaceId = () => {
	return useQuery({
		queryKey: ['familySpaceId'],
		queryFn: getMyFamilySpaceId,
		staleTime: 1000 * 30 * 60,
		select: data => data.result,
	});
};

export default useGetFamilySpaceId;
