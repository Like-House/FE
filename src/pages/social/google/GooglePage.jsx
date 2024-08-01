import { useEffect } from 'react';
import { useGoogleLogin } from '../../../hooks/queries/login/useLogin';

const GooglePage = () => {
	const { mutate } = useGoogleLogin();

	useEffect(() => {
		mutate();
	}, []);
	return <></>;
};

export default GooglePage;
