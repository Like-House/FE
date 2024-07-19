import { Link } from 'react-router-dom';
import { CustomButton, CustomInput, LoginIcon } from '../../components';
import * as S from './LoginPage.style';
import NAVER from '../../assets/images/naver.svg';
import KAKAO from '../../assets/images/kakao.svg';
import GOOGLE from '../../assets/images/google.svg';
import useForm from '../../hooks/useForm';
import { useLogin } from '../../hooks/queries/login/useLogin';
import { useState } from 'react';

const LoginPage = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const loginForm = useForm({
		initialValue: {
			email: '',
			password: '',
		},
	});

	const { mutate } = useLogin();

	const handleSubmit = () => {
		mutate(loginForm.values, {
			onError: error => {
				console.log(error);
				if (error.response?.status === 400) {
					setErrorMessage('이메일 및 비밀번호를 다시 확인해주세요.');
				}
			},
		});
	};

	return (
		<S.Container>
			<S.LoginContainer>
				<S.TextWrapper>
					<h2>로그인</h2>
					<p>이메일과 비밀번호를 입력해주세요.</p>
				</S.TextWrapper>
				<S.LoginFormContainer onSubmit={e => e.preventDefault()}>
					<S.InputWrapper>
						<label>이메일</label>
						<CustomInput
							{...loginForm.getTextInputProps('email')}
							placeholder="이메일을 입력해주세요."
							filled={true}
							size="SM"
							type="text"
							errors={loginForm.touched.email && errorMessage}
						/>
					</S.InputWrapper>
					<S.InputWrapper>
						<label>비밀번호</label>
						<CustomInput
							{...loginForm.getTextInputProps('password')}
							placeholder="비밀번호를 입력해주세요."
							filled={true}
							size="SM"
							type="password"
							errors={loginForm.touched.password && errorMessage}
							message={loginForm.touched.password && errorMessage}
						/>
					</S.InputWrapper>
					<span>
						계정이 없으신가요? <Link to="/signup">회원가입하기</Link>
					</span>
					<S.Line>
						<hr />
						or
						<hr />
					</S.Line>
					<S.IconWrapper>
						<LoginIcon
							text="카카오로 로그인"
							icon={<img src={KAKAO} alt="카카오" />}
						/>
						<LoginIcon
							text="네이버로 로그인"
							icon={<img src={NAVER} alt="네이버" />}
						/>
						<LoginIcon
							text="구글로 로그인"
							icon={<img src={GOOGLE} alt="구글" />}
						/>
					</S.IconWrapper>
					<CustomButton
						btnType="primary"
						label="로그인"
						width="80%"
						onClick={handleSubmit}
						disabled={
							loginForm.values.email === '' || loginForm.values.password === ''
						}
					/>
				</S.LoginFormContainer>
			</S.LoginContainer>
		</S.Container>
	);
};

export default LoginPage;
