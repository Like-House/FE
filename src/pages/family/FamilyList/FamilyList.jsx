import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './FamilyList.style';
import { Avatar, CustomButton } from '../../../components/index';
import { PAGE_PATH } from '../../../constants/path';
import useGetFamilyList from '../../../hooks/queries/family/useGetFamilyList';
import useGetFamilyImg from '../../../hooks/queries/family/useGetFamilyImg';

function FamilyList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: familyData, isLoading } = useGetFamilyList();
  const [familyMembers, setFamilyMembers] = useState([]);
  const { data } = useGetFamilyImg(member?.profileImage, member?.userId);

  useEffect(() => {
    if (familyData) {
      setFamilyMembers(familyData.familyDataList);
    }
  }, [familyData]);

  useEffect(() => {
    if (
      location.state?.updatedMember &&
      typeof location.state.index === 'number'
    ) {
      const updatedMembers = [...familyMembers];
      updatedMembers[location.state.index] = location.state.updatedMember;
      setFamilyMembers(updatedMembers);
    }
  }, [location.state]);

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
            <S.MemberInfoWrapper>
              <S.MemberInfo>
                <Avatar
                  src={data?.url}
                  size='md'
                  shape='circle'
                  alt={`${member?.name} avatar`}
                />
                <S.MemberDetails>
                  <S.MemberNameRole>
                    <S.MemberName>
                      {member?.name}
                      {member?.isManager && <S.HostTag>주최자</S.HostTag>}
                    </S.MemberName>
                    <S.MemberRole>{member?.nickname}</S.MemberRole>
                  </S.MemberNameRole>
                </S.MemberDetails>
              </S.MemberInfo>
              <CustomButton
                btnType='secondary'
                label='정보 수정'
                onClick={() => handleEditClick(index)}
              />
            </S.MemberInfoWrapper>
            <S.MemberDescription>{member?.memo}</S.MemberDescription>
          </S.FamilyMember>
        ))}
      </S.FamilyList>
    </S.Container>
  );
}

export default FamilyList;
