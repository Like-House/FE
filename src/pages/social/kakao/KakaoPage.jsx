import { useEffect } from 'react';
import { useKakaoLogin } from '../../../hooks/queries/login/useLogin';

const KakaoPage = () => {
	const { mutate } = useKakaoLogin();

	useEffect(() => {
		mutate();
	}, []);

	return <></>;
};

export default KakaoPage;
