import { Alert, Avatar, CustomButton, CustomInput } from '@/components';
import * as S from './ProfilePage.style';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import useUpdateProfile from '@/hooks/queries/user/useUpdateProfile';
import { useEffect, useState } from 'react';
import useFile from '@/hooks/useFile';
import { createPresignedURL, uploadImageToS3 } from '@/apis';
import useGetUserImg from '@/hooks/queries/user/useGetUserImg';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '@/constants';

const ProfilePage = () => {
	const nav = useNavigate();
	const { data: profileData } = useGetProfile();
	const { data: userImg } = useGetUserImg(profileData?.imageKeyName);

	const { mutate: updateProfileMutate, isSuccess: isUpdateSuccess } =
		useUpdateProfile();
	const [name, setName] = useState(profileData?.name);
	const [birthday, setBirthday] = useState(profileData?.birthDate);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { file, filePreview, handleChangeFile } = useFile();

	const isSocialLogin = profileData?.socialType !== 'LOCAL';

	const handleDateChange = e => {
		setBirthday(e.target.value);
	};

	const handleSubmit = async () => {
		if (file) {
			const data = await createPresignedURL(file.name);
			await uploadImageToS3({ url: data?.result?.url, file: file });
			updateProfileMutate({
				name,
				birthDate: birthday,
				imageKeyName: data.result.keyName,
			});
		} else {
			updateProfileMutate({
				name,
				birthDate: birthday,
			});
		}
	};

	useEffect(() => {
		if (isUpdateSuccess) {
			setIsModalOpen(true);
		}
	}, [isUpdateSuccess]);

	const handleConfirm = () => {
		setIsModalOpen(false);
		nav(`${PAGE_PATH.BASE}`);
	};
	return (
		<S.Container>
			<S.Heading>개인정보 수정</S.Heading>
			<S.Field>
				<S.Title>프로필 사진</S.Title>
				<S.ProfilePictureContainer>
					<Avatar
						src={
							filePreview
								? filePreview
								: userImg?.url
									? `${userImg?.url}`
									: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3C/svg%3E'
						}
						size="4xl"
						shape="rect"
						alt="프로필 사진"
					/>
					{!isSocialLogin && (
						<>
							<S.Button>
								<CustomButton
									btnType="secondary"
									label="사진 올리기"
									onClick={() => document.getElementById('fileInput').click()}
									width="150px"
								/>
							</S.Button>
							<S.FileInput
								type="file"
								id="fileInput"
								onChange={handleChangeFile}
							/>
						</>
					)}
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

export default ProfilePage;
