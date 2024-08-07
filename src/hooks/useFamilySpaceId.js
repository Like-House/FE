import { useQuery } from '@tanstack/react-query';
import { getMyFamilySpaceId } from '../apis/family';

const useFamilySpaceId = () => {
	return useQuery({
		queryKey: ['familySpaceId'],
		queryFn: getMyFamilySpaceId,
		select: data => data.result,
	});
};

export default useFamilySpaceId;
