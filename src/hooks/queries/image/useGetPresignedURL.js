import { useQuery } from '@tanstack/react-query';
import { createPresinedURL } from '../../../apis/image';

const useGetPresignedURL = filename => {
	return useQuery({
		queryKey: [filename],
		queryFn: () => createPresinedURL(filename),
	});
};

export default useGetPresignedURL;
