import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getRealImageUrl } from '../../../apis';

const useGetUserImg = imageUrl => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: [QUERY_KEYS.USER, QUERY_KEYS.USERIMG],
		select: data => data.result,
		enabled: !!imageUrl, // url 있을 경우에만 실행
	});
};

export default useGetUserImg;
