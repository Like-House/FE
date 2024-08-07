import { useQuery } from '@tanstack/react-query';
import { getAlbum } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';

const useGetAlbum = familySpaceId => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY, familySpaceId],
		queryFn: () => getAlbum(familySpaceId),
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
	});
};

export default useGetAlbum;
