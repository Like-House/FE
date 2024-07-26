import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './FamilyList.style';
import { Avatar, CustomButton } from '../../../components/index';
import { PAGE_PATH } from '../../../constants/path';
import MOCK_FAMILY_MEMBERS from '../../../assets/data/data';

function FamilyList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [familyMembers, setFamilyMembers] = useState(MOCK_FAMILY_MEMBERS);

  useEffect(() => {
    if (
      location.state?.updatedMember &&
      typeof location.state.index === 'number'
    ) {
      const updatedMembers = [...familyMembers];
      updatedMembers[location.state.index] = location.state.updatedMember;
      setFamilyMembers(updatedMembers);
    }
  }, [location.state, familyMembers]);

  const handleEditClick = (index) => {
    navigate(`${PAGE_PATH.FAMILY_EDIT}`, {
      state: { member: familyMembers[index], index },
    });
  };

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

export default FamilyList;
