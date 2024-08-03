import { useQuery } from '@tanstack/react-query';
import { getRealImageUrl } from '../../../apis/image';

const useGetRealImageUrl = ({ imageUrl, chatRoomId }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: ['chatrooms', chatRoomId],
	});
};

export default useGetRealImageUrl;
