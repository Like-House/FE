import * as S from './ChangeRoom.style';

import { useNavigate } from 'react-router-dom';
import { MdOutlineFileUpload } from 'react-icons/md';

import { Avatar, CustomButton } from '@/components/index.js';
import CoverImg from '@/assets/images/chatRoomImg.webp';
import { createPresignedURL, uploadImageToS3 } from '@/apis';
import usePatchChatRoom from '@/hooks/queries/chat/usePatchChatRoom';
import useFile from '@/hooks/useFile';
import { PAGE_PATH } from '@/constants';

const ChangeRoom = ({ room }) => {
	const nav = useNavigate();
	const { chatRoomId, title } = room;
	const { mutate: modifyChatInfo } = usePatchChatRoom();
	const { file, filePreview, handleChangeFile } = useFile();

	const handleClick = async () => {
		const data = await createPresignedURL(file.name);
		await uploadImageToS3({ url: data.result.url, file: file });

		try {
			modifyChatInfo({
				chatRoomId,
				title,
				imageKeyName: data.result.keyName,
			});
		} catch (error) {
			console.log(error);
		}
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}/${chatRoomId}`, {
			state: { ...room },
		});
	};

	const changeSimpleImg = () => {
		modifyChatInfo({
			chatRoomId,
			title,
			imageKeyName: null,
		});

		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}/${chatRoomId}`, {
			state: { ...room },
		});
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
				<span onClick={changeSimpleImg}>기본으로 변경하기</span>
			</S.ContentWrapper>
			<S.ButtonBox>
				<CustomButton
					btnType="primary"
					label="변경 완료"
					onClick={handleClick}
					disabled={!file}
				/>
			</S.ButtonBox>
		</S.Container>
	);
};

export default ChangeRoom;
