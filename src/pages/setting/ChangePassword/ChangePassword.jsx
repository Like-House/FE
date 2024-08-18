import * as S from './ChangePassword.style';
import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { CustomButton, Alert, CustomInput } from '@/components/index';
import useChangePassword from '@/hooks/queries/user/useChangePassword';

export default function ChangePassword() {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [touchedFields, setTouchedFields] = useState({});
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const { mutate: changePassword } = useChangePassword();

	const validatePassword = password => {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	};

	const handleSubmit = () => {
		let errors = {};

		if (!validatePassword(currentPassword)) {
			errors.currentPassword = '잘못된 비밀번호입니다. 다시 입력해주세요.';
		}

		if (!validatePassword(newPassword)) {
			errors.newPassword = '대문자 / 소문자 / 특수문자 포함, 8자리 이상';
		} else if (newPassword === currentPassword) {
			errors.newPassword = '현재 비밀번호와 일치합니다.';
		}

		if (newPassword !== confirmPassword) {
			errors.confirmPassword = '새로운 비밀번호가 일치하지 않습니다.';
		}

		setErrorMessage(errors);

		if (Object.keys(errors).length === 0) {
			changePassword(
				{ currentPassword, newPassword },
				{
					onSuccess: () => {
						setIsAlertOpen(true);
						setErrorMessage({});
						resetForm();
					},
					onError: error => {
						console.error('Password change error:', error);
						setErrorMessage({
							currentPassword:
								'비밀번호 변경에 실패했습니다. 다시 시도해주세요.',
						});
					},
				},
			);
		}
	};

	const resetForm = () => {
		setCurrentPassword('');
		setNewPassword('');
		setConfirmPassword('');
		setErrorMessage({
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		});
		setTouchedFields({});
	};

	const handleCurrentPasswordChange = e => {
		const value = e.target.value;
		setCurrentPassword(value);

		if (!validatePassword(value)) {
			setErrorMessage(prev => ({
				...prev,
				currentPassword: '잘못된 비밀번호입니다. 다시 입력해주세요.',
			}));
		} else {
			setErrorMessage(prev => ({
				...prev,
				currentPassword: '',
			}));
		}
		setTouchedFields(prev => ({ ...prev, currentPassword: true }));
	};

	const handleNewPasswordChange = e => {
		const value = e.target.value;
		setNewPassword(value);

		if (value === currentPassword) {
			setErrorMessage(prev => ({
				...prev,
				newPassword: '현재 비밀번호와 일치합니다.',
			}));
		} else if (!validatePassword(value)) {
			setErrorMessage(prev => ({
				...prev,
				newPassword: '대문자 / 소문자 / 특수문자 포함, 8자리 이상',
			}));
		} else {
			setErrorMessage(prev => ({
				...prev,
				newPassword: '',
			}));
		}
		setTouchedFields(prev => ({ ...prev, newPassword: true }));
	};

	const handleIconClick = setValue => {
		setValue('');
	};

	const isFormValid =
		validatePassword(currentPassword) &&
		validatePassword(newPassword) &&
		newPassword === confirmPassword;

	return (
		<S.Container>
			<S.Title>비밀번호 변경</S.Title>
			<S.Form>
				<S.Label>현재 비밀번호</S.Label>
				<CustomInput
					value={currentPassword}
					onChange={handleCurrentPasswordChange}
					name="currentPassword"
					type="password"
					placeholder="현재 비밀번호를 입력해주세요."
					size="BASE"
					errors={!!errorMessage.currentPassword}
					success={
						!errorMessage.currentPassword && touchedFields.currentPassword
					}
					message={errorMessage.currentPassword}
					icon={
						!errorMessage.currentPassword &&
						touchedFields.currentPassword && (
							<MdOutlineCancel
								onClick={() => handleIconClick(setCurrentPassword)}
							/>
						)
					}
				/>
				<S.NewContent>
					<S.LabelContent>
						<S.Label>새로운 비밀번호</S.Label>
						<CustomInput
							value={newPassword}
							onChange={handleNewPasswordChange}
							name="newPassword"
							type="password"
							placeholder="새로운 비밀번호를 입력해주세요."
							size="BASE"
							errors={!!errorMessage.newPassword}
							success={
								!errorMessage.newPassword &&
								validatePassword(newPassword) &&
								newPassword !== currentPassword &&
								touchedFields.newPassword
							}
							message={errorMessage.newPassword}
							icon={
								!errorMessage.newPassword &&
								touchedFields.newPassword && (
									<MdOutlineCancel
										onClick={() => handleIconClick(setNewPassword)}
									/>
								)
							}
						/>
					</S.LabelContent>
					<S.Label>새로운 비밀번호 확인</S.Label>
					<CustomInput
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						name="confirmPassword"
						type="password"
						placeholder="새로운 비밀번호를 다시 입력해주세요."
						size="BASE"
						errors={!!errorMessage.confirmPassword}
						success={confirmPassword !== '' && confirmPassword === newPassword}
						message={errorMessage.confirmPassword}
						icon={
							!errorMessage.confirmPassword &&
							touchedFields.confirmPassword && (
								<MdOutlineCancel
									onClick={() => handleIconClick(setConfirmPassword)}
								/>
							)
						}
					/>
					{errorMessage.confirmPassword && (
						<S.Error>{errorMessage.confirmPassword}</S.Error>
					)}
				</S.NewContent>
			</S.Form>
			<S.Button>
				<CustomButton
					btnType="primary"
					onClick={handleSubmit}
					disabled={!isFormValid}
					label="변경 완료"
					width="150px"
				/>
			</S.Button>
			<Alert
				isOpen={isAlertOpen}
				message="비밀번호가 성공적으로 변경되었습니다."
				onConfirm={() => setIsAlertOpen(false)}
			/>
		</S.Container>
	);
}
