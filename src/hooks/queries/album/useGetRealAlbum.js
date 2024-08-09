import { useQuery } from '@tanstack/react-query';
import { getRealImageUrl } from '../../../apis/image';
import { QUERY_KEYS } from '../../../constants';

const useGetRealAlbum = ({ imageUrl, postId }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.ALBUM, postId],
	});
};

export default useGetRealAlbum;
