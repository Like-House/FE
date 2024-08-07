import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blockUser } from '../../../apis/user';
import queryClient from '../../../apis/queryClient';
import { QUERY_KEYS } from '../../../constants';

const useBlockFamilyMember = () => {
  return useMutation({
    mutationFn: blockUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAMILY] });
    },
  });
};

export default useBlockFamilyMember;
