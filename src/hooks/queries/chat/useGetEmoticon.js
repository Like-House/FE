import { getEmoticon } from '@/apis';
import { QUERY_KEYS } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const useGetEmoticon = ({ familySpaceId }) => {
	return useQuery({
		queryKey: [QUERY_KEYS.EMOTICONS],
		queryFn: () => getEmoticon({ familySpaceId }),
		enabled: !!familySpaceId,
		select: data => data.result.familyEmoticonDTOList,
	});
};

export default useGetEmoticon;
