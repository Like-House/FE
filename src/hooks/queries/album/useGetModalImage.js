import { useQuery } from '@tanstack/react-query';
import { getRealImageUrl } from '../../../apis/image';
import { QUERY_KEYS } from '../../../constants';

const useGetModalImage = ({ imageUrl }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.MODAL_IMG, imageUrl],
	});
};

export default useGetModalImage;
