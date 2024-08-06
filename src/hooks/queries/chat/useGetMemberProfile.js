import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getRealImageUrl } from '../../../apis';

const useGetMemberProfile = ({ imageUrl, userId }) => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.CHATROOMS, userId],
	});
};

export default useGetMemberProfile;
