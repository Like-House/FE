import { LoginForm } from '../../components';
import * as S from './LoginPage.style';

const LoginPage = () => {
	return (
		<S.Container>
			<S.LoginContainer>
				<S.TextWrapper>
					<h2>로그인</h2>
					<p>이메일과 비밀번호를 입력해주세요.</p>
				</S.TextWrapper>
				<LoginForm />
			</S.LoginContainer>
		</S.Container>
	);
};

export default LoginPage;
