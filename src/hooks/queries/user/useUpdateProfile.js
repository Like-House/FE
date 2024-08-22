import { useMutation } from '@tanstack/react-query';
import { updateProfile } from '@/apis/user';
import { QUERY_KEYS } from '@/constants';
import queryClient from '@/apis/queryClient';

const useUpdateProfile = () => {
	const mutation = useMutation({
		mutationFn: updateProfile,
		onSuccess: async () => {
			await queryClient.invalidateQueries([
				QUERY_KEYS.USER,
				QUERY_KEYS.PROFILE,
			]);
			await queryClient.invalidateQueries([
				QUERY_KEYS.USER,
				QUERY_KEYS.USERIMG,
			]);
		},
	});

	return mutation;
};

export default useUpdateProfile;
