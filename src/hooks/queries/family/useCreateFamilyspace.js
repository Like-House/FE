import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { createFamilyspace } from '@/apis';
import { PAGE_PATH } from '@/constants';
import theme from '@/theme/theme';

const useCreateFamilyspace = () => {
	const nav = useNavigate();
	return useMutation({
		mutationFn: createFamilyspace,
		onSuccess: data => {
			nav(`/${PAGE_PATH.SERVICE}/${PAGE_PATH.CREATE_SPACE}`, {
				state: { ...data.result },
			});
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

export default useCreateFamilyspace;
