import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/apis';
import useAuthStore from '@/store/useAuthStore';
import { QUERY_KEYS } from '@/constants';

const useGetProfile = () => {
	const { isAuthenticated } = useAuthStore();
	return useQuery({
		queryKey: [QUERY_KEYS.USER, QUERY_KEYS.PROFILE],
		queryFn: getProfile,
		select: data => data.result,
		enabled: !!isAuthenticated,
		staleTime: 1000 * 30 * 60,
	});
};

export default useGetProfile;
