import { useQueries } from '@tanstack/react-query';
import { getRealImageUrl } from '../../../apis/image';
import { QUERY_KEYS } from '../../../constants';

const useGetRealAlbum = (albumData = []) => {
	const queries = albumData.map(picture => ({
		queryKey: [QUERY_KEYS.ALBUMIMG, picture.imageUrl],
		queryFn: () => getRealImageUrl(picture.imageUrl),
	}));

	return useQueries({
		queries,
	});
};

export default useGetRealAlbum;
