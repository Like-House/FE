import { useQuery } from '@tanstack/react-query';
import { getFamilySpaceId } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';

const useGetFamilySpaceID = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY_SPACE_ID],
		queryFn: getFamilySpaceId,
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
	});
};

export default useGetFamilySpaceID;
