import { useQuery } from '@tanstack/react-query';

import { getRealImageUrlList } from '@/apis/album';
import { QUERY_KEYS } from '@/constants';

const useGetRealAlbum = ({ albumData = [] }) => {
	const imageUrls = albumData.map(picture => picture.imageUrl);

	return useQuery({
		queryKey: [QUERY_KEYS.ALBUMIMG, imageUrls],
		queryFn: () => getRealImageUrlList(imageUrls),
		enabled: !!imageUrls,
	});
};

export default useGetRealAlbum;
