import React from 'react';
import * as S from './FamilySpaceSettings.style';
import link from '../../../assets/images/link.png';
import { Alert, CustomButton } from '../../../components/index';
import useModal from '../../../hooks/useModal';

function FamilySpaceSettings() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = () => {
    console.log('Confirmed!');
    closeModal();
  };

  return (
    <S.FamilySpaceSettingsContainer>
      <S.Title>가족 공간 초대 링크</S.Title>
      <S.Content>
        <S.InviteLinkInput
          type='text'
          value='https://www.figma.com/ko-kr/downloads/'
          readOnly
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
