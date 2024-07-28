import { useMutation } from '@tanstack/react-query';
import { login } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';

const useLogin = () => {
	const navigation = useNavigate();
	const { setLoggedIn } = useAuthStore(state => state);

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			setLoggedIn(data);
			navigation('/');
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
