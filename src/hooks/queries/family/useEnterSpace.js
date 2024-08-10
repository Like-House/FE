import { useMutation } from '@tanstack/react-query';
import { enterFamilySpace } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';
import { toast } from 'sonner';
import theme from '../../../theme/theme';

const useEnterSpace = () => {
	const nav = useNavigate();
	return useMutation({
		mutationFn: enterFamilySpace,
		onSuccess: () => {
			nav(`${PAGE_PATH.HOME}`);
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

export default useEnterSpace;
