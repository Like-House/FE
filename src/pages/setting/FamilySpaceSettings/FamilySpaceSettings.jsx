import * as S from './FamilySpaceSettings.style';
import { useState, useEffect } from 'react';
import { Alert, CustomButton } from '@/components/index';
import useModal from '@/hooks/useModal';
import link from '@/assets/images/link.png';
import {
  getFamilyList,
  regenerateInviteCode,
  getInviteCode,
} from '@/apis/family';
import useDeleteFamilySpace from '@/hooks/queries/family/useDeleteFamilySpace';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '@/constants';
import useGetProfile from '@/hooks/queries/user/useGetProfile';

function FamilySpaceSettings() {
  const { isOpen, openModal, closeModal } = useModal();
  const [inviteCode, setInviteCode] = useState('');
  const [isManager, setIsManager] = useState(false);
  const { mutate } = useDeleteFamilySpace();
  const nav = useNavigate();
  const { data: profileData, isSuccess: isProfileSuccess } = useGetProfile();

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const response = await getInviteCode();
        setInviteCode(response.result.code);
      } catch (error) {
        console.error('Error fetching invite code:', error);
      }
    };

    const checkIsManager = async () => {
      try {
        const familyDataResponse = await getFamilyList();
        const familyData = familyDataResponse.result;

        console.log('Family Data:', familyData);

        if (familyData && isProfileSuccess && profileData) {
          const manager = familyData.familyDataList.find(
            (user) => user.isManager
          );
          const userId = profileData.userId;

          setIsManager(manager?.userId === userId);
        }
      } catch (error) {
        console.error('Error fetching family data:', error);
      }
    };

    fetchInviteCode();
    if (isProfileSuccess && profileData) {
      checkIsManager();
    }
  }, [isProfileSuccess, profileData]);

  const handleConfirm = () => {
    mutate();
    closeModal();
    nav(PAGE_PATH.BASE);
  };

  const handleRegenerateCode = async () => {
    try {
      const response = await regenerateInviteCode();
      setInviteCode(response.result.code);
      alert('초대 코드가 재발급되었습니다.');
    } catch (error) {
      console.error('Error regenerating invite code:', error);
      alert('초대 코드 재발급에 실패했습니다.');
    }
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

      {isManager && (
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
        </S.SettingsSection>
      )}
    </S.FamilySpaceSettingsContainer>
  );
}

export default FamilySpaceSettings;
