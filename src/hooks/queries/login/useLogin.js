import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { login } from '@/apis';
import { PAGE_PATH, QUERY_KEYS } from '@/constants';
import useAuthStore from '@/store/useAuthStore';
import usePostFcmToken from '@/hooks/queries/fcm/usePostFcmToken.js';
import useFcmTokenStore from '@/store/useFcmTokenStore.js';
import queryClient from '@/apis/queryClient';

const useLogin = () => {
	const navigation = useNavigate();
	const { setIsAuthenticated } = useAuthStore();
	const { fcmToken } = useFcmTokenStore();
	const { mutate } = usePostFcmToken();
	return useMutation({
		mutationFn: login,
		onSuccess: () => {
			navigation(`${PAGE_PATH.BASE}`);
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
			setIsAuthenticated(true);
			// if (fcmToken) {
			// 	mutate(fcmToken);
			// } else {
			// 	console.warn('FCM token is not available');
			// }
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
