import { useQuery } from '@tanstack/react-query';

import { getRealImageUrls } from '@/apis';

const useGetImageUrls = (postId, imageUrls) => {
	return useQuery({
		queryFn: () => getRealImageUrls(imageUrls),
		queryKey: [postId, 'images'],
		enabled: imageUrls && imageUrls.length > 0,
		staleTime: 1000 * 30 * 60,
		select: data => data.result,
	});
};

export default useGetImageUrls;
