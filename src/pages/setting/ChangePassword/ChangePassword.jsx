import React, { useState, useEffect } from 'react';
import * as S from './ChangePassword.style';
import { CustomButton, Alert, CustomInput } from '../../../components/index';
import { MdOutlineCancel } from 'react-icons/md';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [focusField, setFocusField] = useState(null); // 추가된 부분

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    let errors = {};
    if (currentPassword !== 'correct_password') {
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
      setIsAlertOpen(true);
      setErrorMessage({});
    }
  };

  const handleFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
    setFocusField(field); // 추가된 부분
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
    setFocusField(null); // 추가된 부분
  };

  const handleIconClick = (setValue) => {
    setValue('');
  };

  useEffect(() => {
    if (confirmPassword && confirmPassword !== newPassword) {
      setErrorMessage((prev) => ({
        ...prev,
        confirmPassword: '새로운 비밀번호가 일치하지 않습니다.',
      }));
    } else {
      setErrorMessage((prev) => {
        const { confirmPassword, ...rest } = prev;
        return rest;
      });
    }
  }, [newPassword, confirmPassword]);

  const isFormValid =
    currentPassword === 'correct_password' &&
    validatePassword(newPassword) &&
    newPassword === confirmPassword;

  return (
    <S.Container>
      <S.Title>개인정보 수정</S.Title>
      <S.Form>
        <S.Label>현재 비밀번호</S.Label>
        <CustomInput
          value={currentPassword}
          onChange={(e) => {
            setCurrentPassword(e.target.value);
            if (e.target.value !== 'correct_password') {
              setErrorMessage((prev) => ({
                ...prev,
                currentPassword: '잘못된 비밀번호입니다. 다시 입력해주세요.',
              }));
            } else {
              setErrorMessage((prev) => {
                const { currentPassword, ...rest } = prev;
                return rest;
              });
            }
          }}
          onBlur={() => handleBlur('currentPassword')}
          name='currentPassword'
          type='password'
          placeholder='현재 비밀번호를 입력해주세요.'
          size='BASE'
          errors={errorMessage.currentPassword}
          success={currentPassword === 'correct_password'}
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
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (!validatePassword(e.target.value)) {
                  setErrorMessage((prev) => ({
                    ...prev,
                    newPassword: '대문자 / 소문자 / 특수문자 포함, 8자리 이상',
                  }));
                } else {
                  setErrorMessage((prev) => {
                    const { newPassword, ...rest } = prev;
                    return rest;
                  });
                }
              }}
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
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value !== newPassword) {
                setErrorMessage((prev) => ({
                  ...prev,
                  confirmPassword: '새로운 비밀번호가 일치하지 않습니다.',
                }));
              } else {
                setErrorMessage((prev) => {
                  const { confirmPassword, ...rest } = prev;
                  return rest;
                });
              }
            }}
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
