import * as S from './EditProfile.style';
import { useState, useEffect } from 'react';
import { CustomButton, CustomInput, Alert, Avatar } from '@/components/index';
import useImageUpload from '@/hooks/useImageUpload';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import useUpdateProfile from '@/hooks/queries/user/useUpdateProfile';

const EditProfile = () => {
  const { data: profileData, isSuccess } = useGetProfile();
  const {
    mutate: updateProfileMutate,
    isLoading,
    isError,
    error,
    isSuccess: isUpdateSuccess,
  } = useUpdateProfile();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false);
  const [profilePicture, handlePictureChange, resetPicture] =
    useImageUpload('');

  useEffect(() => {
    if (isSuccess && profileData) {
      console.log('Fetched Profile Data:', profileData);
      setName(profileData.name);
      setBirthday(profileData.birthDate);
      resetPicture(profileData.imageKeyName);
    }
  }, [isSuccess, profileData, resetPicture]);

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
    updateProfileMutate({
      name,
      birthDate: birthday,
      imageKeyName: profilePicture,
    });
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      setIsModalOpen(true);
    }
  }, [isUpdateSuccess]);

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
              profilePicture
                ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${profilePicture}` // 프로필 사진 URL 설정
                : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3C/svg%3E'
            }
            size='4xl'
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
            onChange={(e) => {
              handlePictureChange(e);
              setIsFormModified(true);
            }}
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
        <input
          value={birthday || ''}
          onChange={handleDateChange}
          name='birthday'
          type='date'
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
          disabled={!isFormModified || isLoading}
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
