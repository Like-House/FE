import { useMutation } from '@tanstack/react-query';

import { postFcmToken } from '@/apis/fcmToken.js';

const usePostFcmToken = () => {
	return useMutation({
		mutationFn: postFcmToken,
		onSuccess: data => {
			console.log(data);
		},
	});
};

export default usePostFcmToken;
