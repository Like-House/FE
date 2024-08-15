import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/apis/user';

const useChangePassword = () => {
  return useMutation(changePassword);
};

export default useChangePassword;
