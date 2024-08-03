import * as S from './ChangeRoom.style';
import CoverImg from '../../../assets/images/chatRoomImg.webp';
import { Avatar, CustomButton } from '../../';
import { MdOutlineFileUpload } from 'react-icons/md';
import { useChatRoom } from '../../../store';
import { useState } from 'react';
import { createPresinedURL, uploadImageToS3 } from '../../../apis/image';
import usePatchChatRoom from '../../../hooks/queries/chat/usePatchChatRoom';
import queryClient from '../../../apis/queryClient.js';
import { useMutation } from '@tanstack/react-query';
import { patchChatRoom } from '../../../apis/index.js';
import { useNavigate } from 'react-router-dom';

const ChangeRoom = () => {
	const { chatRoomId, chatTitle, setChangeRoomInfo } = useChatRoom();
	const { mutate: modifyChatInfo } = usePatchChatRoom();
	const [file, setFile] = useState(null);
	const [filePreview, setFilePreview] = useState(null);

	const handleChangeFile = e => {
		if (e.target.files) {
			const selectedFile = e.target.files[0];
			setFile(selectedFile);
			setFilePreview(URL.createObjectURL(selectedFile));
		}
	};

	const handleClick = async () => {
		const data = await createPresinedURL(file.name);
		await uploadImageToS3({ url: data.result.url, file: file });

		try {
			modifyChatInfo({
				chatRoomId,
				title: chatTitle,
				imageUrl: data.result.keyName,
			});
			setChangeRoomInfo();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<S.Container>
			<h1>채팅방 커버 이미지 변경</h1>
			<S.ContentWrapper>
				<p>채팅방 커버에 등록될 사진을 업로드해주세요.</p>
				<S.CoverImgWrapper>
					{filePreview ? (
						<Avatar src={filePreview} size="lg" />
					) : (
						<Avatar src={CoverImg} size="lg" />
					)}
					<label htmlFor="file">
						사진 올리기 <MdOutlineFileUpload size={17} />
					</label>
					<S.FileInput type="file" id="file" onChange={handleChangeFile} />
				</S.CoverImgWrapper>
				<span>기본으로 변경하기</span>
			</S.ContentWrapper>
			<S.ButtonBox>
				<CustomButton
					btnType="primary"
					label="변경 완료"
					onClick={handleClick}
				/>
			</S.ButtonBox>
		</S.Container>
	);
};

export default ChangeRoom;
