import * as S from './FamilySpaceSettings.style';

import { useState } from 'react';
import { Alert, CustomButton } from '@/components/index';
import useModal from '@/hooks/useModal';
import link from '@/assets/images/link.png';
import { deleteFamilySpace } from '@/apis/family';

function FamilySpaceSettings() {
  const { isOpen, openModal, closeModal } = useModal();
  const [inviteCode, setInviteCode] = useState('dlrjszheozhem12');
  const [alertMessage, setAlertMessage] = useState('');

  const handleConfirm = async () => {
    try {
      await deleteFamilySpace();
      setAlertMessage('가족 공간이 삭제되었습니다.');
    } catch (error) {
      console.error('Error deleting family space:', error);
      setAlertMessage('가족 공간 삭제에 실패했습니다.');
    } finally {
      closeModal();
    }
  };

  const handleRegenerateCode = () => {
    setInviteCode('newcode123456');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode).then(
      () => {
        alert('초대 코드가 클립보드에 복사되었습니다.');
      },
      (err) => {
        alert('클립보드 복사에 실패했습니다.');
      }
    );
  };

  return (
    <S.FamilySpaceSettingsContainer>
      <S.Title>가족 공간 초대 코드</S.Title>
      <S.CodeContent>
        <S.CustomButton onClick={handleRegenerateCode}>
          코드 재발급
        </S.CustomButton>
      </S.CodeContent>
      <S.Content>
        <S.InviteLinkInput type='text' value={inviteCode} readOnly />
        <S.IconButton onClick={handleCopyToClipboard}>
          <S.Icon src={link} alt='link Icon' />
        </S.IconButton>
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
          message='정말 가족 공간을 삭제하시겠습니까?'
          onConfirm={handleConfirm}
          onCancel={closeModal}
        />
        {alertMessage && (
          <Alert
            isOpen={true}
            message={alertMessage}
            onConfirm={() => setAlertMessage('')}
          />
        )}
      </S.SettingsSection>
    </S.FamilySpaceSettingsContainer>
  );
}

export default FamilySpaceSettings;
