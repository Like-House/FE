import { deleteFamilySpace } from '@/apis';
import theme from '@/theme/theme';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import queryClient from '@/apis/queryClient';

const useDeleteFamilySpace = () => {
	return useMutation({
		mutationFn: deleteFamilySpace,
		onSuccess: () => {
			toast.success('가족 공간이 삭제되었습니다.');
			queryClient.clear();
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

export default useDeleteFamilySpace;
