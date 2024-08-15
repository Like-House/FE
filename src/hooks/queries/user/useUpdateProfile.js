import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '@/apis/user';
import { QUERY_KEYS } from '@/constants';

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER, QUERY_KEYS.PROFILE]);
    },
  });

  return mutation;
};

export default useUpdateProfile;
