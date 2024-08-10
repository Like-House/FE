import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/apis';

const useGetPosts = ({ familySpaceId, page, size }) => {
	return useQuery({
		queryFn: () => getPosts({ familySpaceId, page, size }),
		queryKey: ['posts', familySpaceId],
		enabled: !!familySpaceId,
		select: data => data.result,
	});
};

export default useGetPosts;
