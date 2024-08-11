import * as S from './LoginForm.style';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton, CustomInput } from '@/components/index.js';

import useForm from '@/hooks/useForm';
import { useLogin } from '@/hooks/queries/login/useLogin';
import Social from '@/components/form/social/Social.jsx';

const LoginForm = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const loginForm = useForm({
		initialValue: {
			email: '',
			password: '',
		},
	});

	const { mutate } = useLogin();

	const handleSubmit = () => {
		if (loginForm.values.email === '' || loginForm.values.password === '') {
			loginForm.setTouched({
				email: true,
				password: true,
			});
			setErrorMessage('이메일 및 비밀번호를 입력해주세요.');
			return;
		}
		mutate(loginForm.values, {
			onError: error => {
				if (error.response?.status === 400) {
					setErrorMessage('이메일 및 비밀번호를 다시 확인해주세요.');
				}
			},
		});
	};

	return (
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
					autoComplete="off"
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
			<Social />
			<CustomButton
				btnType="primary"
				label="로그인"
				width="80%"
				onClick={handleSubmit}
			/>
		</S.LoginFormContainer>
	);
};

export default LoginForm;
