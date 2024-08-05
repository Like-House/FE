import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import * as S from './Message.style';
import { useChatRoom } from '../../../store';
import { GoBellSlash } from 'react-icons/go';
import { RxExit } from 'react-icons/rx';
import { TbPhoto } from 'react-icons/tb';
import { useState } from 'react';
import useExitChatRoom from '../../../hooks/queries/chat/useExitChatRoom';
import { IoChatbubbles } from 'react-icons/io5';
import theme from '../../../theme/theme';
import useModal from '../../../hooks/useModal';
import { ChangeRoom, Alert, PopOver } from '../../';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage.js';

const Message = () => {
	const { chatTitle, chatImg, chatRoomId, changeRoomInfo, setChangeRoomInfo } =
		useChatRoom();
	const [open, setOpen] = useState();
	const { mutate } = useExitChatRoom();

	const { isOpen, openModal, closeModal } = useModal();

	const { data } = useGetRealImageUrl({ chatRoomId, imageUrl: chatImg });

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
		setChangeRoomInfo();
		setOpen(false);
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

	if (!changeRoomInfo) {
		if (!chatRoomId) {
			return (
				<S.NoChatContainer>
					<IoChatbubbles size={30} color={theme.COLOR.YELLOW.YELLOW_500} />
					<p>현재 참여중인 채팅방이 없습니다.</p>
				</S.NoChatContainer>
			);
		} else {
			return (
				<S.Container>
					<Alert
						isOpen={isOpen}
						message="채팅방을 나가시겠습니까?"
						onConfirm={handleConfirm}
						onCancel={closeModal}
					/>
					<S.NavContainer>
						<S.UserContainer>
							<img src={data?.result.url} alt="profile" />
							<p>{chatTitle}</p>
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
		}
	} else {
		return <ChangeRoom />;
	}
};

export default Message;