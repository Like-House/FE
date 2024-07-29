import * as S from './LoginIcon.style';

const LoginIcon = ({ text, icon, onClick }) => {
	return (
		<S.Container onClick={onClick}>
			{icon}
			<p>{text}</p>
		</S.Container>
	);
};

export default LoginIcon;
