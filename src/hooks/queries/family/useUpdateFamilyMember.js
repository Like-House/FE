import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyMember } from '../../../apis/family';
import { QUERY_KEYS } from '../../../constants/key';

const useUpdateFamilyMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, data }) => updateFamilyMember(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAMILY] });
    },
  });
};

export default useUpdateFamilyMember;
