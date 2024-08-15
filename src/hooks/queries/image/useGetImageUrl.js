import { useQuery } from '@tanstack/react-query';
import { getRealImageUrl } from '@/apis/image';

const useGetImageUrl = imageUrl => {
	return useQuery({
		queryFn: () => getRealImageUrl(imageUrl),
		queryKey: ['imageUrl', imageUrl],
		enabled: !!imageUrl,
		select: data => data.result,
	});
};

export default useGetImageUrl;
