import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './FamilySettings.style';
import { Avatar, CustomButton, Alert } from '../../../components/index';
import useModal from '../../../hooks/useModal';
import theme from '../../../theme/theme';
import { PAGE_PATH } from '../../../constants/path';
import MOCK_FAMILY_MEMBERS from '../../../assets/data/data';

const { COLOR } = theme;

function FamilySettings() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(null);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [blockedMembers, setBlockedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [alert, setAlert] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    setFamilyMembers(MOCK_FAMILY_MEMBERS);
    setIsOwner(true);
  }, []);

  const handleConfirm = () => {
    if (selectedAction === 'block') {
      setBlockedMembers([...blockedMembers, selectedMember]);
      setFamilyMembers(
        familyMembers.filter((member) => member !== selectedMember)
      );
    } else if (selectedAction === 'unblock') {
      setBlockedMembers(
        blockedMembers.filter((member) => member !== selectedMember)
      );
      setFamilyMembers([...familyMembers, selectedMember]);
    }
    setIsEditing(null);
    closeModal();
    setAlert(true);
    setSelectedAction(null);
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleOpenModal = (index, action) => {
    setSelectedMember(
      action === 'unblock' ? blockedMembers[index] : familyMembers[index]
    );
    setSelectedAction(action);
    openModal();
  };

  const handleInfoEdit = () => {
    navigate(`${PAGE_PATH.HOME}/${PAGE_PATH.FAMILY}`);
  };

  return (
    <S.Container>
      <S.Section>
        <S.SectionTitle>가족 목록</S.SectionTitle>
        <S.FamilyList>
          {familyMembers.map((member, index) => (
            <S.FamilyMember key={index}>
              <S.MemberInfo>
                <Avatar
                  src={member.imgSrc}
                  size='md'
                  shape='circle'
                  alt={`${member.name} avatar`}
                />
                <S.MemberDetails>
                  <S.MemberName>{member.name}</S.MemberName>
                  <S.MemberRole>{member.role}</S.MemberRole>
                </S.MemberDetails>
              </S.MemberInfo>
              <S.Actions>
                {isOwner ? (
                  <>
                    <CustomButton
                      btnType='secondary'
                      label='정보 수정'
                      onClick={handleInfoEdit}
                    />
                    <CustomButton
                      btnType='outline'
                      outlineColor={COLOR.MAIN.YELLOW}
                      label='차단'
                      onClick={() => handleOpenModal(index, 'block')}
                    />
                  </>
                ) : (
                  <CustomButton
                    btnType='secondary'
                    label='정보 수정'
                    onClick={handleInfoEdit}
                  />
                )}
              </S.Actions>
            </S.FamilyMember>
          ))}
        </S.FamilyList>
        <S.SectionTitle>차단 목록</S.SectionTitle>
        <S.FamilyList>
          {blockedMembers.length === 0 ? (
            <S.EmptyMessage>차단된 가족이 없습니다.</S.EmptyMessage>
          ) : (
            blockedMembers.map((member, index) => (
              <S.FamilyMember key={index}>
                <S.MemberInfo>
                  <Avatar
                    src={member.imgSrc}
                    size='md'
                    shape='circle'
                    alt={`${member.name} avatar`}
                  />
                  <S.MemberDetails>
                    <S.MemberName>{member.name}</S.MemberName>
                    <S.MemberRole>{member.role}</S.MemberRole>
                  </S.MemberDetails>
                </S.MemberInfo>
                <S.Actions>
                  <CustomButton
                    btnType='outline'
                    outlineColor={COLOR.MAIN.YELLOW}
                    label='차단 해제'
                    onClick={() => handleOpenModal(index, 'unblock')}
                  />
                </S.Actions>
              </S.FamilyMember>
            ))
          )}
        </S.FamilyList>
      </S.Section>

      <Alert
        isOpen={isOpen && selectedAction !== 'unblock'}
        message='해당 가족을 차단할까요?'
        detailMessage='이 가족을 차단하면 가족과 관련된 게시글, 채팅, 알림, 일정 등이 모두 삭제됩니다. 한 번 삭제된 가족 데이터는 다시 복구할 수 없습니다.'
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <Alert
        isOpen={isOpen && selectedAction === 'unblock'}
        message='해당 가족을 차단 해제할까요?'
        detailMessage='이 가족을 차단 해제하면 차단 목록에서 보이지 않게 됩니다. 해당 가족은 다시 가족으로 추가하여 가족 공간에 참여할 수 있습니다.'
        onConfirm={() => {
          handleConfirm();
          setAlert(true);
        }}
        onCancel={handleCancel}
      />

      {alert && (
        <Alert
          isOpen={alert}
          message={
            selectedAction === 'release'
              ? '해당 가족이 해제되었습니다.'
              : selectedAction === 'block'
                ? '해당 가족이 차단되었습니다.'
                : '해당 가족이 차단 해제되었습니다.'
          }
          onConfirm={() => setAlert(false)}
        />
      )}
    </S.Container>
  );
}

export default FamilySettings;
