import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { validateSignUp } from '../../../utils/auth';
import * as S from './SignupForm.style';
import { CustomButton, CheckBox, CustomInput } from '../../';
import useCheckBox from '../../../hooks/useCheckBox';

const SignupForm = () => {
	const signupForm = useForm({
		initialValue: {
			username: '',
			email: '',
			password: '',
			passwordCheck: '',
		},
		validate: validateSignUp,
	});

	const [file, setFile] = useState(null);

	const [msg, setMsg] = useState({
		send: {
			errors: '',
			success: '',
		},
		check: {
			errors: '',
			success: '',
		},
	});

	const { checked: checkAll, setChecked: setCheckAll } = useCheckBox(false);
	const {
		checked: checkFirst,
		toggle: toggleFirst,
		setChecked: setCheckFirst,
	} = useCheckBox(false);
	const {
		checked: checkSecond,
		toggle: toggleSecond,
		setChecked: setCheckSecond,
	} = useCheckBox(false);

	const onClickToggle = () => {
		const newCheckAll = !checkAll;
		setCheckAll(newCheckAll);
		setCheckFirst(newCheckAll);
		setCheckSecond(newCheckAll);
	};

	const handleMessage = () => {
		// 인증번호 전송 로직
		// 전송 성공
		setMsg(prev => ({
			...prev,
			send: {
				errors: '',
				success: '인증번호 발송 완료!',
			},
		}));
		// 전송 실패
		// setMsg(prev => ({
		// 	...prev,
		// 	send: {
		// 		errors: '인증번호 발송에 실패하였습니다.',
		// 		success: '',
		// 	},
		// }));
	};

	const handleCheckMessage = () => {
		// 인증번호 확인 로직
		// 보냈는데 성공하면
		setMsg(prev => ({
			...prev,
			check: {
				errors: '',
				success: '인증번호 확인 완료!',
			},
		}));
		// 인증 번호가 일치하지 않는 경우
		// setMsg(prev => ({
		// 	...prev,
		// 	check: {
		// 		success: '',
		// 		errors: '인증번호가 일치하지 않습니다.',
		// 	},
		// }));
	};

	const handleChangeFile = e => {
		if (e.target.files) {
			const file = e.target.files[0];
			setFile(URL.createObjectURL(file));
		}
	};

	return (
		<S.FormContainer>
			<S.InputWrapper>
				<label>이름</label>
				<S.UserNameWrapper>
					<CustomInput
						{...signupForm.getTextInputProps('username')}
						errors={
							signupForm.touched.username && signupForm.message.errors?.username
						}
						success={
							signupForm.touched.username &&
							signupForm.message.success?.username
						}
						size="XS"
						type="text"
						placeholder="이름을 입력해 주세요."
					/>
				</S.UserNameWrapper>
			</S.InputWrapper>
			<S.InputWithBtn>
				<S.InputWrapper>
					<label>이메일</label>
					<CustomInput
						{...signupForm.getTextInputProps('email')}
						errors={
							(signupForm.touched.email && signupForm.message.errors?.email) ||
							msg.send.errors
						}
						size="LG"
						type="text"
						placeholder="이름을 입력해 주세요."
						message={
							(signupForm.touched.email && signupForm.message.errors?.email) ||
							msg.send.success ||
							msg.send.errors
						}
						success={msg.send.success}
					/>
				</S.InputWrapper>
				<CustomButton
					btnType="primary"
					label="인증번호 전송"
					disabled={signupForm.message.errors?.email}
					onClick={handleMessage}
				/>
			</S.InputWithBtn>
			<S.InputWithBtn>
				<S.InputWrapper>
					<label>인증번호 확인</label>
					<CustomInput
						placeholder="인증번호를 입력해 주세요."
						size="LG"
						type="text"
						errors={msg.check.errors}
						success={msg.check.success}
						message={msg.check.success || msg.check.errors}
					/>
				</S.InputWrapper>
				<CustomButton
					btnType="primary"
					label="인증번호 확인"
					disabled={!msg.send.success}
					onClick={handleCheckMessage}
				/>
			</S.InputWithBtn>

			<S.InputWrapper>
				<label>비밀번호</label>
				<CustomInput
					{...signupForm.getTextInputProps('password')}
					placeholder="비밀번호를 설정해주세요."
					size="XL"
					type="password"
					errors={
						signupForm.touched.password && signupForm.message.errors?.password
					}
					message={
						signupForm.touched.password && signupForm.message.errors?.password
					}
					success={
						signupForm.touched.password && signupForm.message.success?.password
					}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<label>비밀번호 확인</label>
				<CustomInput
					{...signupForm.getTextInputProps('passwordCheck')}
					placeholder="비밀번호를 확인해주세요."
					size="XL"
					type="password"
					errors={
						signupForm.touched.passwordCheck &&
						signupForm.message.errors?.passwordCheck
					}
					message={
						signupForm.touched.passwordCheck &&
						signupForm.message.errors?.passwordCheck
					}
					success={
						signupForm.touched.passwordCheck &&
						signupForm.message.success?.passwordCheck
					}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<label>생년월일</label>
				<CustomInput
					placeholder="생년월일을 확인해주세요."
					size="XL"
					type="text"
				/>
			</S.InputWrapper>
			<S.FileWrapper>
				<p>프로필 사진</p>
				<S.File>
					{file ? <img src={file} /> : <div />}
					<label htmlFor="file">사진 올리기</label>
				</S.File>
				<S.FileInput type="file" id="file" onChange={handleChangeFile} />
			</S.FileWrapper>
			<S.TextWrapper>
				<h2>약관 동의</h2>
				<p>개인정보 처리 및 서비스 이용에 대한 약관에 동의해주세요.</p>
			</S.TextWrapper>
			<S.TermsContainer>
				<CheckBox
					label="전체 동의"
					type="outline"
					size="sm"
					checked={checkAll}
					onChange={onClickToggle}
				/>
				<hr />
				<S.CheckBoxWrapper>
					<CheckBox
						checked={checkFirst}
						onChange={toggleFirst}
						label="개인정보 처리방침"
						required
						type="outline"
						size="sm"
					/>
					<CheckBox
						label="서비스 이용약관"
						required
						type="outline"
						size="sm"
						checked={checkSecond}
						onChange={toggleSecond}
					/>
				</S.CheckBoxWrapper>
			</S.TermsContainer>
			<CustomButton btnType="primary" label="회원가입 완료" width="100%" />
		</S.FormContainer>
	);
};

export default SignupForm;
