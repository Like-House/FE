import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../../components';
import * as S from './InvitationLink.style';
import errorIcon from '../../../assets/images/error.png';
import successIcon from '../../../assets/images/success.png';

const InvitationLink = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const code = e.target.value;
    setInviteCode(code);

    if (!code) {
      setErrorMessage('초대 코드를 입력해주세요.');
      setIsSuccess(false);
    } else if (code !== 'validCode') {
      setErrorMessage('다시 입력해주세요. :(');
      setIsSuccess(false);
    } else {
      setErrorMessage('');
      setIsSuccess(true);
    }
  };

  const handleSubmit = () => {
    if (!inviteCode) {
      setErrorMessage('초대 코드를 입력해주세요.');
      setIsSuccess(false);
    } else if (inviteCode !== 'validCode') {
      setErrorMessage('다시 입력해주세요. :(');
      setIsSuccess(false);
    } else {
      setErrorMessage('');
      setIsSuccess(true);
    }
  };

  const getIcon = () => {
    if (errorMessage) {
      return <S.Icon src={errorIcon} alt='Error Icon' />;
    } else if (isSuccess) {
      return <S.Icon src={successIcon} alt='Success Icon' />;
    }
    return null;
  };

  return (
    <S.OuterContainer>
      <S.Container>
        <S.Title>가족 공간 입장하기</S.Title>
        <S.SubTitle>우리 가족만의 온라인 공간을 만나러 가볼까요?</S.SubTitle>
        <S.Form>
          <S.Label>초대 코드</S.Label>
          <S.InputContainer>
            <CustomInput
              value={inviteCode}
              onChange={handleInputChange}
              type='text'
              placeholder='초대 코드를 입력해주세요.'
              errors={errorMessage}
              success={isSuccess}
              size='XL'
              icon={getIcon()}
            />
          </S.InputContainer>

          <S.ErrorMsg>{errorMessage}</S.ErrorMsg>
          <S.ButtonContainer>
            <CustomButton
              btnType='primary'
              label='초대 코드 확인'
              onClick={handleSubmit}
              width='100%'
              height='50px'
              disabled={!inviteCode || !!errorMessage || !isSuccess}
            />{' '}
          </S.ButtonContainer>
        </S.Form>
      </S.Container>
    </S.OuterContainer>
  );
};

export default InvitationLink;
