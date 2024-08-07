import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blockUser } from '../../../apis/user';
import queryClient from '../../../apis/queryClient';

const useBlockFamilyMember = () => {
  return useMutation({
    mutationFn: blockUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['familyData'] });
    },
  });
};

export default useBlockFamilyMember;
