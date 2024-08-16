import * as S from './ChangePassword.style';
import { useState, useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { CustomButton, Alert, CustomInput } from '@/components/index';
import useChangePassword from '@/hooks/queries/user/useChangePassword';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(false);

  const { mutate: changePassword } = useChangePassword();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    let errors = {};

    if (!isCurrentPasswordValid) {
      errors.currentPassword = '잘못된 비밀번호입니다. 다시 입력해주세요.';
    }

    if (!validatePassword(newPassword)) {
      errors.newPassword = '대문자 / 소문자 / 특수문자 포함, 8자리 이상';
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
          },
          onError: () => {
            setErrorMessage({
              currentPassword:
                '비밀번호 변경에 실패했습니다. 다시 시도해주세요.',
            });
          },
        }
      );
    }
  };

  const handleCurrentPasswordChange = (e) => {
    const value = e.target.value;
    setCurrentPassword(value);

    console.log('Current Password:', value);

    changePassword(
      { currentPassword: value, newPassword: '' },
      {
        onSuccess: () => {
          setIsCurrentPasswordValid(true);
          setErrorMessage((prev) => {
            const { currentPassword, ...rest } = prev;
            return rest;
          });
        },
        onError: () => {
          setIsCurrentPasswordValid(false);
          setErrorMessage((prev) => ({
            ...prev,
            currentPassword: '잘못된 비밀번호입니다. 다시 입력해주세요.',
          }));
        },
      }
    );
  };

  const handleFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleIconClick = (setValue) => {
    setValue('');
  };

  const isFormValid =
    isCurrentPasswordValid &&
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
          onBlur={() => handleBlur('currentPassword')}
          name='currentPassword'
          type='password'
          placeholder='현재 비밀번호를 입력해주세요.'
          size='BASE'
          errors={errorMessage.currentPassword}
          success={isCurrentPasswordValid}
          message={errorMessage.currentPassword}
          icon={
            !errorMessage.currentPassword &&
            touchedFields.currentPassword && (
              <MdOutlineCancel
                onClick={() => handleIconClick(setCurrentPassword)}
              />
            )
          }
          onFocus={() => handleFocus('currentPassword')}
        />
        <S.NewContent>
          <S.LabelContent>
            <S.Label>새로운 비밀번호</S.Label>
            <CustomInput
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onBlur={() => handleBlur('newPassword')}
              name='newPassword'
              type='password'
              placeholder='새로운 비밀번호를 입력해주세요.'
              size='BASE'
              errors={errorMessage.newPassword}
              success={validatePassword(newPassword)}
              message={errorMessage.newPassword}
              icon={
                !errorMessage.newPassword &&
                touchedFields.newPassword && (
                  <MdOutlineCancel
                    onClick={() => handleIconClick(setNewPassword)}
                  />
                )
              }
              onFocus={() => handleFocus('newPassword')}
            />
            {errorMessage.newPassword && (
              <S.Error>{errorMessage.newPassword}</S.Error>
            )}
          </S.LabelContent>
          <S.Label>새로운 비밀번호 확인</S.Label>
          <CustomInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            name='confirmPassword'
            type='password'
            placeholder='새로운 비밀번호를 다시 입력해주세요.'
            size='BASE'
            errors={errorMessage.confirmPassword}
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
            onFocus={() => handleFocus('confirmPassword')}
          />
          {errorMessage.confirmPassword && (
            <S.Error>{errorMessage.confirmPassword}</S.Error>
          )}
        </S.NewContent>
      </S.Form>
      <S.Button>
        <CustomButton
          btnType='primary'
          onClick={handleSubmit}
          disabled={!isFormValid}
          label='변경 완료'
          width='150px'
        />
      </S.Button>
      <Alert
        isOpen={isAlertOpen}
        message='비밀번호가 성공적으로 변경되었습니다.'
        onConfirm={() => setIsAlertOpen(false)}
      />
    </S.Container>
  );
}
