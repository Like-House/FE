import { useMutation } from '@tanstack/react-query';

import { checkEmailCode } from '@/apis';

const useCheckEmailCode = () => {
	return useMutation({
		mutationFn: checkEmailCode,
	});
};

export default useCheckEmailCode;
