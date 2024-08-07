import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './FamilySettings.style';
import { Avatar, CustomButton, Alert } from '../../../components/index';
import useModal from '../../../hooks/useModal';
import theme from '../../../theme/theme';
import { PAGE_PATH } from '../../../constants/path';
import useGetFamilyList from '../../../hooks/queries/family/useGetFamilyList';
import useBlockFamilyMember from '../../../hooks/queries/family/useBlockFamilyMember';

const { COLOR } = theme;

function FamilySettings() {
  const navigate = useNavigate();
  const { data: familyData } = useGetFamilyList();
  const { mutate: blockMember } = useBlockFamilyMember();
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = () => {
    if (selectedAction === 'block') {
      blockMember(selectedMember.userId);
    }
    closeModal();
  };

  const handleOpenModal = (member, action) => {
    setSelectedMember(member);
    setSelectedAction(action);
    openModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleInfoEdit = () => {
    navigate(`${PAGE_PATH.HOME}/${PAGE_PATH.FAMILY}`);
  };

  return (
    <S.Container>
      <S.Section>
        <S.SectionTitle>가족 목록</S.SectionTitle>
        <S.FamilyList>
          {familyData?.familyDataList.map((member, index) => (
            <S.FamilyMember key={index}>
              <S.MemberInfo>
                <Avatar
                  src={member.profileImage}
                  size='md'
                  shape='circle'
                  alt={`${member.name} avatar`}
                />
                <S.MemberDetails>
                  <S.MemberName>{member.name}</S.MemberName>
                  <S.MemberRole>{member.nickname}</S.MemberRole>
                </S.MemberDetails>
              </S.MemberInfo>
              <S.Actions>
                <CustomButton
                  btnType='outline'
                  outlineColor={COLOR.MAIN.YELLOW}
                  label='차단'
                  onClick={() => handleOpenModal(member, 'block')}
                />
              </S.Actions>
            </S.FamilyMember>
          ))}
        </S.FamilyList>
      </S.Section>
      <S.Section>
        <S.SectionTitle>차단 목록</S.SectionTitle>
        <S.FamilyList>
          {familyData?.blockFamilyDataList.length === 0 ? (
            <S.EmptyMessage>차단된 가족이 없습니다.</S.EmptyMessage>
          ) : (
            familyData?.blockFamilyDataList.map((member, index) => (
              <S.FamilyMember key={index}>
                <S.MemberInfo>
                  <Avatar
                    src={member.profileImage}
                    size='md'
                    shape='circle'
                    alt={`${member.name} avatar`}
                  />
                  <S.MemberDetails>
                    <S.MemberName>{member.name}</S.MemberName>
                    <S.MemberRole>{member.nickname}</S.MemberRole>
                  </S.MemberDetails>
                </S.MemberInfo>
                <S.Actions>
                  <CustomButton
                    btnType='outline'
                    outlineColor={COLOR.MAIN.YELLOW}
                    label='차단 해제'
                    onClick={() => handleOpenModal(member, 'unblock')}
                  />
                </S.Actions>
              </S.FamilyMember>
            ))
          )}
        </S.FamilyList>
      </S.Section>

      <Alert
        isOpen={isOpen && selectedAction === 'block'}
        message='해당 가족을 차단할까요?'
        detailMessage='이 가족을 차단하면 가족과 관련된 게시글, 채팅, 알림, 일정 등이 모두 삭제됩니다. 한 번 삭제된 가족 데이터는 다시 복구할 수 없습니다.'
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <Alert
        isOpen={isOpen && selectedAction === 'unblock'}
        message='해당 가족을 차단 해제할까요?'
        detailMessage='이 가족을 차단 해제하면 차단 목록에서 보이지 않게 됩니다. 해당 가족은 다시 가족으로 추가하여 가족 공간에 참여할 수 있습니다.'
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </S.Container>
  );
}

export default FamilySettings;
