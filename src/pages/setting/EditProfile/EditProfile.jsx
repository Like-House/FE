import React, { useState, useEffect } from 'react';
import * as S from './EditProfile.style';
import {
  CustomButton,
  CustomInput,
  Alert,
  Avatar,
} from '../../../components/index';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
        setIsFormModified(true);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePicture('');
      checkIfFormModified(name, '', birthday);
    }
  };

  const handleDateChange = (e) => {
    setBirthday(e.target.value);
    checkIfFormModified(name, profilePicture, e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    checkIfFormModified(e.target.value, profilePicture, birthday);
  };

  const checkIfFormModified = (name, profilePicture, birthday) => {
    if (name || profilePicture || birthday) {
      setIsFormModified(true);
    } else {
      setIsFormModified(false);
    }
  };

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.Heading>개인정보 수정</S.Heading>
      <S.Field>
        <S.Title>프로필 사진</S.Title>
        <S.ProfilePictureContainer>
          <Avatar
            src={
              profilePicture ||
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3C/svg%3E'
            }
            size='four_xl'
            shape='rect'
            alt='프로필 사진'
          />
          <S.Button>
            <CustomButton
              btnType='secondary'
              label='사진 올리기'
              onClick={() => document.getElementById('fileInput').click()}
              width='150px'
            />
          </S.Button>
          <S.FileInput
            id='fileInput'
            type='file'
            accept='image/*'
            onChange={handlePictureChange}
          />
        </S.ProfilePictureContainer>
      </S.Field>
      <S.Field>
        <S.Label>이름</S.Label>
        <CustomInput
          value={name}
          onChange={handleNameChange}
          name='name'
          type='text'
          placeholder='이름을 입력해 주세요.'
          size='XS'
        />
      </S.Field>
      <S.Field>
        <S.Label>생년월일</S.Label>
        <CustomInput
          value={birthday}
          onChange={handleDateChange}
          name='birthday'
          type='text'
          placeholder='여기를 클릭해 날짜를 선택하세요.'
          size='XS'
        />
      </S.Field>
      <S.ButtonContainer>
        <CustomButton
          btnType='primary'
          onClick={handleSubmit}
          label='수정 완료'
          width='150px'
          disabled={!isFormModified}
        />
      </S.ButtonContainer>
      <Alert
        isOpen={isModalOpen}
        message='수정이 완료되었습니다.'
        onConfirm={handleConfirm}
      />
    </S.Container>
  );
};

export default EditProfile;
