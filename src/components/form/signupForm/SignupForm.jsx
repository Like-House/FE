import * as S from './SignupForm.style';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, CheckBox } from '@/components/index.js';

import { createPresignedURL, uploadImageToS3 } from '@/apis';
import useForm from '@/hooks/useForm';
import useCheckBox from '@/hooks/useCheckBox';
import { useSignup } from '@/hooks/queries/signup/useSignup';
import useGetEmailCode from '@/hooks/queries/signup/useGetEmailCode';
import useCheckEmailCode from '@/hooks/queries/signup/useCheckEmailCode';
import useFile from '@/hooks/useFile.js';
import { PAGE_PATH } from '@/constants';
import { validateSignUp } from '@/utils';

const SignupForm = () => {
	const nav = useNavigate();
	const { file, filePreview, handleChangeFile } = useFile();
	const { mutate: codeMutate, isPending } = useGetEmailCode();
	const { mutate: checkCodeMutate } = useCheckEmailCode();

	const signupForm = useForm({
		initialValue: {
			username: '',
			email: '',
			code: '',
			password: '',
			passwordCheck: '',
			birthDate: '',
		},
		validate: validateSignUp,
	});

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
		codeMutate(signupForm.values.email, {
			onSuccess: () => {
				setMsg(prev => ({
					...prev,
					send: {
						errors: '',
						success: '인증번호 발송 완료!',
					},
				}));
			},
			onError: () => {
				setMsg(prev => ({
					...prev,
					send: {
						errors: '인증번호 발송에 실패하였습니다.',
						success: '',
					},
				}));
			},
		});
	};

	const handleCheckMessage = () => {
		// 인증번호 확인 로직
		checkCodeMutate(
			{
				email: signupForm.values.email,
				code: signupForm.values.code,
			},
			{
				onSuccess: () => {
					setMsg(prev => ({
						...prev,
						check: {
							errors: '',
							success: '인증번호 확인 완료!',
						},
					}));
				},
				onError: () => {
					setMsg(prev => ({
						...prev,
						check: {
							success: '',
							errors: '인증번호가 일치하지 않습니다.',
						},
					}));
				},
			},
		);
	};

	const { mutate } = useSignup();

	const handleSubmit = async () => {
		if (file) {
			const data = await createPresignedURL(file.name);
			await uploadImageToS3({ url: data.result.url, file: file });

			mutate(
				{
					name: signupForm.values.username,
					email: signupForm.values.email,
					password: signupForm.values.password,
					birthDate: signupForm.values.birthDate,
					imageKeyName: data.result.keyName,
				},
				{
					onError: error => {
						if (error.response?.status === 400) {
							alert(error.response.data?.message);
							nav(`/${PAGE_PATH.LOGIN}`);
						}
					},
				},
			);
		} else {
			mutate(
				{
					name: signupForm.values.username,
					email: signupForm.values.email,
					password: signupForm.values.password,
					birthDate: signupForm.values.birthDate,
					imageKeyName: null,
				},
				{
					onError: error => {
						if (error.response?.status === 400) {
							alert(error.response.data?.message);
							nav(`/${PAGE_PATH.LOGIN}`);
						}
					},
				},
			);
		}
	};

	useEffect(() => {
		if (checkFirst && checkSecond) {
			setCheckAll(true);
		} else {
			setCheckAll(false);
		}
	}, [checkFirst, checkSecond]);

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
					{isPending && <S.CodeMsg>인증 번호를 발송 중 입니다...</S.CodeMsg>}
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
						{...signupForm.getTextInputProps('code')}
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
					autoComplete="off"
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
					autoComplete="off"
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
					{...signupForm.getBirthDateInputProps('birthDate')}
					placeholder="YYYY-MM-DD"
					size="XL"
					type="text"
					maxLength="10"
					errors={
						signupForm.touched.birthDate && signupForm.message.errors?.birthDate
					}
					message={
						signupForm.touched.birthDate && signupForm.message.errors?.birthDate
					}
					success={
						signupForm.touched.birthDate &&
						signupForm.message.success?.birthDate
					}
				/>
			</S.InputWrapper>
			<S.FileWrapper>
				<p>프로필 사진</p>
				<S.File>
					{filePreview ? <img src={filePreview} /> : <div />}
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
			<CustomButton
				btnType="primary"
				label="회원가입 완료"
				width="100%"
				onClick={handleSubmit}
				disabled={
					!(
						signupForm.message.success?.username &&
						signupForm.message.success?.email &&
						signupForm.message.success?.password &&
						signupForm.message.success?.passwordCheck &&
						msg.send.success &&
						msg.check.success &&
						checkAll
					)
				}
			/>
		</S.FormContainer>
	);
};

export default SignupForm;
