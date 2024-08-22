import * as S from './Social.style';

import { LoginIcon } from '@/components/index.js';
import { API_PATH } from '@/constants';
import NAVER from '@/assets/images/naver.svg';
import KAKAO from '@/assets/images/kakao.svg';
import GOOGLE from '@/assets/images/google.svg';

const Social = () => {
	const { VITE_API_URL } = import.meta.env;

	const handleKakao = () => {
		location.href = `${VITE_API_URL}/${API_PATH.KAKAO_REDIRECT}`;
	};

	const handleNaver = () => {
		location.href = `${VITE_API_URL}/${API_PATH.NAVER_REDITECT}`;
	};

	const handleGoogle = () => {
		location.href = `${VITE_API_URL}/${API_PATH.GOOGLE_REDITECT}`;
	};

	return (
		<S.IconWrapper>
			<LoginIcon
				onClick={handleKakao}
				text="카카오로 로그인"
				icon={<img src={KAKAO} alt="카카오" />}
			/>
			<LoginIcon
				onClick={handleNaver}
				text="네이버로 로그인"
				icon={<img src={NAVER} alt="네이버" />}
			/>
			<LoginIcon
				onClick={handleGoogle}
				text="구글로 로그인"
				icon={<img src={GOOGLE} alt="구글" />}
			/>
		</S.IconWrapper>
	);
};

export default Social;
