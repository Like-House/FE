import { useMutation } from '@tanstack/react-query';
import { getEmailCode } from '../../../apis/auth';

const useGetEmailCode = () => {
	return useMutation({
		mutationFn: getEmailCode,
	});
};

export default useGetEmailCode;
