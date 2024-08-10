import { useMutation } from '@tanstack/react-query';

import theme from '@/theme/theme';
import { checkSpaceCode } from '@/apis';
import { toast } from 'sonner';
import useFamilySpaceStore from '@/store/useFamilySpaceStore';

const useCheckSpaceCode = () => {
	const { setFamilySpaceId } = useFamilySpaceStore();
	return useMutation({
		mutationFn: checkSpaceCode,
		onSuccess: data => {
			setFamilySpaceId(data.result.familySpaceId);
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
