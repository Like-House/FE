import React, { useState } from 'react';
import * as S from './FamilyMainPage.style';
import { Avatar, CustomButton, CustomInput } from '../../components/index';

function FamilyMain() {
  const [familyMembers, setFamilyMembers] = useState([
    {
      name: '김oo',
      role: '아빠',
      description: '아빠가 가끔 화장실 불을 안 끄고 나가신다.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
      isHost: false,
    },
    {
      name: '조oo',
      role: '엄마',
      description: '엄마가 가장 좋아하는 꽃은 장미꽃이다.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
      isHost: false,
    },
    {
      name: '김oo',
      role: '여동생',
      description: '',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
      isHost: true,
    },
    {
      name: '김oo',
      role: '남동생',
      description: '',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iHaiD-giZi3Jqu-1Pm-5RK-CQHisYtiwAQ&s',
      isHost: false,
    },
  ]);

  const [editingMember, setEditingMember] = useState(null);
  const [editingMemberIndex, setEditingMemberIndex] = useState(null);
  const [tempMember, setTempMember] = useState(null);

  const handleEditClick = (index) => {
    setEditingMember(familyMembers[index]);
    setTempMember(familyMembers[index]);
    setEditingMemberIndex(index);
  };

  const handleSaveClick = () => {
    const updatedMembers = [...familyMembers];
    updatedMembers[editingMemberIndex] = tempMember;
    setFamilyMembers(updatedMembers);
    setEditingMember(null);
    setEditingMemberIndex(null);
    setTempMember(null);
  };

  if (editingMember) {
    return (
      <S.Container>
        <S.SectionTitle>가족 정보 수정</S.SectionTitle>
        <S.EditContainer>
          <S.EditProfile>
            <Avatar
              src={editingMember.imgSrc}
              size='lg'
              shape='circle'
              alt={`${editingMember.name} avatar`}
            />
            <S.EditContent>
              <S.EditName>{editingMember.name}</S.EditName>
              <S.EditRole>{editingMember.role}</S.EditRole>
            </S.EditContent>
          </S.EditProfile>

          <S.CustomQuery>
            {editingMember.name}님을 뭐라고 부를까요?
          </S.CustomQuery>
          <CustomInput
            onChange={(e) =>
              setTempMember({ ...tempMember, name: e.target.value })
            }
            name='name'
            type='text'
            placeholder='가족을 부를 명칭을 입력해주세요.'
          />
          <S.CustomQuery>가족에 대한 간단한 메모를 작성해보세요.</S.CustomQuery>
          <CustomInput
            value={tempMember.description}
            onChange={(e) =>
              setTempMember({
                ...tempMember,
                description: e.target.value,
              })
            }
            name='description'
            type='text'
            placeholder='여기에 입력해주세요.'
            noBorder
          />

          <S.ButtonContainer>
            <CustomButton
              btnType='primary'
              label='수정 완료'
              onClick={handleSaveClick}
              width='150px'
            />
          </S.ButtonContainer>
        </S.EditContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Section>
        <S.SectionTitle>가족 목록</S.SectionTitle>
        <S.MemberCount>({familyMembers.length}명)</S.MemberCount>
      </S.Section>
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
                <S.MemberName>
                  {member.name}
                  {member.isHost && <S.HostTag>주최자</S.HostTag>}
                </S.MemberName>
                <S.MemberRole>{member.role}</S.MemberRole>
                <S.MemberDescription>{member.description}</S.MemberDescription>
              </S.MemberDetails>
            </S.MemberInfo>
            <CustomButton
              btnType='secondary'
              label='정보 수정'
              onClick={() => handleEditClick(index)}
            />
          </S.FamilyMember>
        ))}
      </S.FamilyList>
    </S.Container>
  );
}

export default FamilyMain;
