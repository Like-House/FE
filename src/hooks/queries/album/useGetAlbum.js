import { useQuery } from '@tanstack/react-query';
import { getAlbum } from '../../../apis';
import { QUERY_KEYS } from '../../../constants';

const useGetAlbum = (familySpaceId, date, taggedUserIds) => {
	return useQuery({
		queryKey: [QUERY_KEYS.FAMILY, familySpaceId, date, taggedUserIds],
		queryFn: () => getAlbum(familySpaceId, date, taggedUserIds),
		select: data => data.result,
		staleTime: 1000 * 30 * 60,
		enabled: !!familySpaceId,
	});
};

export default useGetAlbum;
