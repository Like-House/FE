import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../../components';
import * as S from './CreateSpace.style';
import linkIcon from '../../../assets/images/link.png';

const CreateSpace = () => {
  const [inviteCode, setInviteCode] = useState('dkssudgktpdy0243');

  const handleInputChange = (e) => {
    setInviteCode(e.target.value);
  };

  const handleSubmit = () => {
    // 가족 공간 입장 버튼 클릭 시의 로직을 여기에 작성
  };

  const getIcon = () => {
    return <S.Icon src={linkIcon} alt='Link Icon' />;
  };

  return (
    <S.OuterContainer>
      <S.Container>
        <S.Title>가족 공간 만들기</S.Title>
        <S.SubTitle>우리 가족만의 온라인 공간을 만나러 가볼까요?</S.SubTitle>
        <S.Description>
          가족 공간이 생성되었습니다.
          <br />
          초대 코드를 전달하고, 가족들을 초대해보세요.
          <br />
          초대 코드는 7일 후 만료되고, 새로운 코드를 발급받을 수 있습니다.
        </S.Description>
        <S.Form>
          <S.Label>초대 코드</S.Label>
          <S.InputContainer>
            <CustomInput
              value={inviteCode}
              onChange={handleInputChange}
              type='text'
              placeholder='초대 코드를 입력해주세요.'
              size='XL'
              icon={getIcon()}
              disabled
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <CustomButton
              btnType='primary'
              label='가족 공간 입장'
              onClick={handleSubmit}
              width='100%'
              height='50px'
            />
          </S.ButtonContainer>
        </S.Form>
      </S.Container>
    </S.OuterContainer>
  );
};

export default CreateSpace;
