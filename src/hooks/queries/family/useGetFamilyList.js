import { useQuery } from '@tanstack/react-query';
import { getFamilyList } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';

const useGetFamilyList = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY],
		queryFn: getFamilyList,
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
	});
};

export default useGetFamilyList;
