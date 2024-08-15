import { useMutation } from '@tanstack/react-query';

import theme from '@/theme/theme';
import { checkSpaceCode } from '@/apis';
import { toast } from 'sonner';
import useEnterSpace from './useEnterSpace';

const useCheckSpaceCode = () => {
	const { mutate: enterMutate } = useEnterSpace();

	return useMutation({
		mutationFn: checkSpaceCode,
		onSuccess: data => {
			enterMutate(data.result.familySpaceId);
		},
		onError: error => {
			error.response &&
				toast.error(error.response.data.message, {
					duration: 1200,
					style: {
						color: theme.COLOR.COMMON.WHITE,
						backgroundColor: theme.COLOR.COMMON.RED,
					},
				});
		},
	});
};

export default useCheckSpaceCode;
