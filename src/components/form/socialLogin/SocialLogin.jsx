import LoginIcon from '../../loginIcon/LoginIcon';
import NAVER from '../../../assets/images/naver.svg';
import KAKAO from '../../../assets/images/kakao.svg';
import GOOGLE from '../../../assets/images/google.svg';
import * as S from './SocialLogin.style';

const SocialLogin = () => {
	const {
		VITE_KAKAO_API_KEY,
		VITE_KAKAO_REDIRECT_URI,
		VITE_NAVER_API_KEY,
		VITE_NAVER_REDIRECT_URI,
		VITE_GOOGLE_API_KEY,
	} = import.meta.env;

	const handleKakao = () => {
		location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_API_KEY}&redirect_uri=${VITE_KAKAO_REDIRECT_URI}&response_type=code`;
	};

	const handleNaver = () => {
		location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${VITE_NAVER_API_KEY}&state=STATE_STRING&redirect_uri=${VITE_NAVER_REDIRECT_URI}`;
	};

	const handleGoogle = () => {
		location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${VITE_GOOGLE_API_KEY}&redirect_uri=${VITE_GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`;
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

export default SocialLogin;
