import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import * as S from './Message.style';
import { GoBellSlash } from 'react-icons/go';
import { RxExit } from 'react-icons/rx';
import { TbPhoto } from 'react-icons/tb';
import { useState } from 'react';
import useExitChatRoom from '../../../hooks/queries/chat/useExitChatRoom';
import useModal from '../../../hooks/useModal';
import { Alert, PopOver } from '../../';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage.js';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';

const Message = ({ room }) => {
	const [open, setOpen] = useState();
	const { chatRoomId, imageKeyName, title } = room;
	const { mutate } = useExitChatRoom();
	const { isOpen, openModal, closeModal } = useModal();
	const { data } = useGetRealImageUrl({ chatRoomId, imageUrl: imageKeyName });
	const nav = useNavigate();

	const handleConfirm = () => {
		mutate(chatRoomId, {
			onError: e => console.log(e),
		});
		closeModal();
	};

	const handleExitChatRoom = () => {
		openModal();
		setOpen(false);
	};

	const handleCoverImg = () => {
		nav(
			`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.MODIFY}/${chatRoomId}`,
			{ state: { ...room } },
		);
	};

	const handleInfo = () => {
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.INFO}/${chatRoomId}`);
	};

	const items = [
		{ icon: <GoBellSlash />, message: '알람 끄기' },
		{
			icon: <RxExit />,
			message: '채팅방 나가기',
			onClick: handleExitChatRoom,
		},

		{
			icon: <TbPhoto />,
			message: '커버 이미지 변경',
			onClick: handleCoverImg,
		},
	];

	return (
		<S.Container>
			<Alert
				isOpen={isOpen}
				message="채팅방을 나가시겠습니까?"
				onConfirm={handleConfirm}
				onCancel={closeModal}
			/>
			<S.NavContainer>
				<S.UserContainer onClick={handleInfo}>
					<img src={data?.result.url} alt="profile" />
					<p>{title}</p>
				</S.UserContainer>
				<S.Menu>
					<p onClick={() => setOpen(!open)}>메뉴</p>
					<S.PopoverWrapper $open={open}>
						<PopOver items={items} />
					</S.PopoverWrapper>
				</S.Menu>
			</S.NavContainer>

			<S.InputContainer>
				<S.IconWrapper>
					<HiOutlinePhotograph size={25} />
					<FaRegSmile size={23} />
				</S.IconWrapper>
				<input placeholder="메시지를 입력해주세요. (Enter: 전송 / Shift + Enter: 줄바꿈)" />
				<FiSend size={25} />
			</S.InputContainer>
		</S.Container>
	);
};

export default Message;
