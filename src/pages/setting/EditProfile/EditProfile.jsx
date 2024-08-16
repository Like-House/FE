import * as S from './EditProfile.style';
import { useState, useEffect } from 'react';
import { CustomButton, CustomInput, Alert, Avatar } from '@/components/index';
import useImageUpload from '@/hooks/useImageUpload';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import useUpdateProfile from '@/hooks/queries/user/useUpdateProfile';
import useGetUserImg from '@/hooks/queries/user/useGetUserImg.js';
import useFile from '@/hooks/useFile.js';
import { createPresignedURL, uploadImageToS3 } from '@/apis/index.js';
import queryClient from '@/apis/queryClient.js';

const EditProfile = () => {
	const { data: profileData, isSuccess } = useGetProfile();
	const { data: userImg } = useGetUserImg(profileData?.imageKeyName);

	const {
		mutate: updateProfileMutate,
		isLoading,
		isError,
		error,
		isSuccess: isUpdateSuccess,
	} = useUpdateProfile();
	const [name, setName] = useState(profileData?.name);
	const [birthday, setBirthday] = useState(profileData?.birthDate);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { file, filePreview, handleChangeFile } = useFile();

	const handleDateChange = e => {
		setBirthday(e.target.value);
	};

	const handleSubmit = async () => {
		if (file) {
			const data = await createPresignedURL(file.name);
			await uploadImageToS3({ url: data?.result?.url, file: file });
			updateProfileMutate(
				{
					name,
					birthDate: birthday,
					imageKeyName: data.result.keyName,
				},
				{
					onSuccess: () => queryClient.invalidateQueries(['user']),
				},
			);
		}
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
					{userImg?.url && !filePreview && (
						<Avatar
							src={
								userImg?.url
									? `${userImg?.url}` // 프로필 사진 URL 설정
									: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3C/svg%3E'
							}
							size="4xl"
							shape="rect"
							alt="프로필 사진"
						/>
					)}
					{filePreview && (
						<Avatar
							src={filePreview}
							size="4xl"
							shape="rect"
							alt="프로필 사진"
						/>
					)}
					<S.Button>
						<CustomButton
							btnType="secondary"
							label="사진 올리기"
							onClick={() => document.getElementById('fileInput').click()}
							width="150px"
						/>
					</S.Button>
					<S.FileInput type="file" id="fileInput" onChange={handleChangeFile} />
				</S.ProfilePictureContainer>
			</S.Field>
			<S.Field>
				<S.Label>이름</S.Label>
				<CustomInput
					value={name}
					onChange={e => setName(e.target.value)}
					name="name"
					type="text"
					placeholder="이름을 입력해 주세요."
					size="XS"
				/>
			</S.Field>
			<S.Field>
				<S.Label>생년월일</S.Label>
				<input
					value={birthday || ''}
					onChange={handleDateChange}
					name="birthday"
					type="date"
					placeholder="여기를 클릭해 날짜를 선택하세요."
					size="XS"
				/>
			</S.Field>
			<S.ButtonContainer>
				<CustomButton
					btnType="primary"
					onClick={handleSubmit}
					label="수정 완료"
					width="150px"
				/>
			</S.ButtonContainer>
			<Alert
				isOpen={isModalOpen}
				message="수정이 완료되었습니다."
				onConfirm={handleConfirm}
			/>
		</S.Container>
	);
};

export default EditProfile;
