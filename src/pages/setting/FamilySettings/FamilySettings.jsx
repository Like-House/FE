import React, { useState } from 'react';
import * as S from './FamilySettings.style';
import { Avatar, CustomButton, Alert } from '../../../components/index';
import useModal from '../../../hooks/useModal';
import theme from '../../../theme/theme';

const { COLOR } = theme;

function FamilySettings() {
  const [isEditing, setIsEditing] = useState(null);
  const [familyMembers, setFamilyMembers] = useState([
    {
      name: '김oo',
      role: '아빠',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
    },
    {
      name: '조oo',
      role: '엄마',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
    },
    {
      name: '김oo',
      role: '여동생',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
    },
    {
      name: '김oo',
      role: '남동생',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
    },
  ]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [alert, setAlert] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = () => {
    console.log('Confirmed!', selectedMember, selectedAction);
    const updatedMembers = familyMembers.filter(
      (member) => member !== selectedMember
    );
    setFamilyMembers(updatedMembers);
    setIsEditing(null);
    closeModal();
    setAlert(true);
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    closeModal();
  };

  const handleEditClick = (index) => {
    setIsEditing(index === isEditing ? null : index);
  };

  const handleOpenModal = (index, action) => {
    setSelectedMember(familyMembers[index]);
    setSelectedAction(action);
    openModal();
  };

  const handleSecondModalConfirm = () => {
    setAlert(false);
    console.log('Second Confirmed!');
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
                {isEditing === index ? (
                  <>
                    <CustomButton
                      btnType='secondary'
                      label='가족 해제'
                      onClick={() => handleOpenModal(index, 'release')}
                    />
                    <CustomButton btnType='secondary' label='상태 변경' />
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
                    onClick={() => handleEditClick(index)}
                  />
                )}
              </S.Actions>
              {isEditing === index && (
                <Alert
                  isOpen={isOpen}
                  message={
                    selectedAction === 'release'
                      ? '해당 가족을 해제할까요?'
                      : '해당 가족을 차단할까요?'
                  }
                  detailMessage={
                    selectedAction === 'release'
                      ? '이 가족을 해제하면 가족과 관련된 게시글, 채팅, 알림, 일정 등이 모두 삭제됩니다. 가족을 다시 가족 공간에 초대되면 모든 데이터가 복구됩니다.'
                      : '이 가족을 차단하면 가족과 관련된 게시글, 채팅, 알림, 일정 등이 모두 삭제됩니다. 한 번 삭제된 가족 데이터는 다시 복구할 수 없습니다.'
                  }
                  onConfirm={handleConfirm}
                  onCancel={handleCancel}
                />
              )}
            </S.FamilyMember>
          ))}
        </S.FamilyList>
      </S.Section>

      {alert && (
        <Alert
          isOpen={alert}
          message={
            selectedAction === 'release'
              ? '해당 가족이 해제되었습니다.'
              : '해당 가족이 차단되었습니다.'
          }
          onConfirm={handleSecondModalConfirm}
        />
      )}
    </S.Container>
  );
}

export default FamilySettings;
