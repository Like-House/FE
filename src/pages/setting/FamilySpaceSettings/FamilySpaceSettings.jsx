import React, { useState, useEffect } from 'react';
import * as S from './FamilySpaceSettings.style';
import link from '../../../assets/images/link.png';
import { Alert, CustomButton, FloatingButton } from '../../../components/index';
import useModal from '../../../hooks/useModal';

// 랜덤 초대 코드 생성 함수
const generateInviteCode = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let inviteCode = '';
  for (let i = 0; i < 12; i++) {
    inviteCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return inviteCode;
};

function FamilySpaceSettings() {
  const { isOpen, openModal, closeModal } = useModal();
  const [inviteCode, setInviteCode] = useState('');

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 랜덤 초대 코드 생성
    setInviteCode(generateInviteCode());
  }, []);

  const handleConfirm = () => {
    console.log('Confirmed!');
    closeModal();
  };

  const handleInviteCodeChange = (event) => {
    setInviteCode(event.target.value);
  };

  return (
    <S.FamilySpaceSettingsContainer>
      <S.Title>가족 공간 초대 코드</S.Title>
      <S.Content>
        <S.InviteLinkInput
          type='text'
          value={inviteCode}
          onChange={handleInviteCodeChange}
          readOnly={false}
        />
        <S.Icon src={link} alt='link Icon' />
      </S.Content>

      <S.SettingsSection>
        <S.DeleteContainer>
          <S.Title>가족 공간 삭제</S.Title>
          <S.DeleteComment>
            가족들이 초대된 가족 공간을 삭제합니다. 이 작업은 되돌릴 수
            없습니다.
          </S.DeleteComment>
        </S.DeleteContainer>

        <CustomButton
          btnType='primary'
          label='가족 공간 삭제'
          onClick={openModal}
        />
        <Alert
          isOpen={isOpen}
          message='가족 공간이 삭제되었습니다.'
          onConfirm={handleConfirm}
        />
      </S.SettingsSection>
    </S.FamilySpaceSettingsContainer>
  );
}

export default FamilySpaceSettings;
