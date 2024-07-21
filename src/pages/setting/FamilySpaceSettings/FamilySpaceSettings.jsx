import React, { useState } from 'react';
import * as S from './FamilySpaceSettings.style';
import link from '../../../assets/images/link.png';
import { Alert, CustomButton, Tooltip } from '../../../components/index';
import useModal from '../../../hooks/useModal';

function FamilySpaceSettings() {
  const { isOpen, openModal, closeModal } = useModal();
  const [inviteCode, setInviteCode] = useState('dlrjszheozhem12');

  const handleConfirm = () => {
    console.log('Confirmed!');
    closeModal();
  };

  const handleRegenerateCode = () => {
    setInviteCode('newcode123456');
  };

  return (
    <S.FamilySpaceSettingsContainer>
      <S.Title>가족 공간 초대 코드</S.Title>
      <S.Content>
        <S.InviteLinkInput type='text' value={inviteCode} readOnly />
        <Tooltip text='코드 재발급' size='sm' position='top'>
          <S.IconButton onClick={handleRegenerateCode}>
            <S.Icon src={link} alt='link Icon' />
          </S.IconButton>
        </Tooltip>
      </S.Content>
      <S.ExpirationNotice>초대 코드는 7일 후 만료됩니다.</S.ExpirationNotice>

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
