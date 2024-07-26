import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './FamilyEdit.style';
import { Avatar, CustomButton, CustomInput } from '../../../components/index';
import { PAGE_PATH } from '../../../constants/path';

function FamilyEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state?.member || {};
  const memberIndex = location.state?.index || 0;
  const [tempMember, setTempMember] = useState(member);

  const handleSaveClick = () => {
    navigate(`${PAGE_PATH.HOME}/${PAGE_PATH.FAMILY}`, {
      state: { updatedMember: tempMember, index: memberIndex },
    });
  };

  return (
    <S.Container>
      <S.SectionTitle>가족 정보 수정</S.SectionTitle>
      <S.EditContainer>
        <S.EditProfile>
          <Avatar
            src={tempMember.imgSrc}
            size='lg'
            shape='circle'
            alt={`${tempMember.name} avatar`}
          />
          <S.EditContent>
            <S.EditName>{tempMember.name}</S.EditName>
            <S.EditRole>{tempMember.role}</S.EditRole>
          </S.EditContent>
        </S.EditProfile>

        <S.CustomQuery>{tempMember.name}님을 뭐라고 부를까요?</S.CustomQuery>
        <CustomInput
          value={tempMember.name}
          onChange={(e) =>
            setTempMember({ ...tempMember, name: e.target.value })
          }
          name='name'
          type='text'
          placeholder='가족을 부를 명칭을 입력해주세요.'
        />
        <S.CustomQuery>가족에 대한 간단한 메모를 작성해보세요.</S.CustomQuery>
        <CustomInput
          onChange={(e) =>
            setTempMember({ ...tempMember, description: e.target.value })
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

export default FamilyEdit;
