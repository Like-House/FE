import { postEmoticon } from '@/apis';
import theme from '@/theme/theme';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const usePostEmoticon = () => {
	return useMutation({
		mutationFn: postEmoticon,
		onSuccess: () => {
			// get 쿼리키 무효화
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

export default usePostEmoticon;
