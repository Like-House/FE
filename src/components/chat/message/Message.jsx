import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import * as S from './Message.style';
import { GoBellSlash } from 'react-icons/go';
import { RxExit } from 'react-icons/rx';
import { TbPhoto } from 'react-icons/tb';
import { useEffect, useRef, useState } from 'react';
import useExitChatRoom from '../../../hooks/queries/chat/useExitChatRoom';
import useModal from '../../../hooks/useModal';
import { Alert, PopOver } from '../../';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage.js';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';
import { IoIosArrowBack } from 'react-icons/io';
import useWebSocketStore from '../../../store/useWebSocketStore.js';
import useGetMessage from '../../../hooks/queries/chat/useGetMessage.js';
import useUserIdStore from '../../../store/useUserIdStore.js';
import ReceiveMessage from '../receivemessage/ReceiveMessage.jsx';
import { useInView } from 'react-intersection-observer';

const Message = ({ room }) => {
	const chatRef = useRef(null);
	const [prevHeight, setPrevHeight] = useState(0);
	const [open, setOpen] = useState();
	const { chatRoomId, imageKeyName, title } = room;
	const { mutate } = useExitChatRoom();
	const { isOpen, openModal, closeModal } = useModal();
	const { data } = useGetRealImageUrl({ chatRoomId, imageUrl: imageKeyName });
	const nav = useNavigate();
	const { userId } = useUserIdStore();
	const [input, setInput] = useState('');
	const { messages, sendMessage, enterChatRoom, exitChatRoom, enter } =
		useWebSocketStore();
	const {
		data: messageData,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
	} = useGetMessage({
		chatRoomId,
		take: 10,
	});

	console.log(messageData, hasNextPage);

	const { ref, inView } = useInView({
		threshold: 0,
		delay: 0,
	});

	useEffect(() => {
		if (inView) {
			!isFetching && hasNextPage && fetchNextPage();
		}
	}, [inView, isFetching, hasNextPage]);

	useEffect(() => {
		if (chatRoomId && !enter) {
			enterChatRoom(chatRoomId);
		}
	}, [chatRoomId, enterChatRoom, enter]);

	const handleSend = e => {
		e.preventDefault();
		if (input.trim()) {
			const message = JSON.stringify({
				chatType: 'TALK',
				content: input,
				chatRoomId,
			});
			sendMessage(message);
			setInput('');
		}
	};

	const handleExit = () => {
		exitChatRoom(chatRoomId);
		nav(-1);
	};
	const handleConfirm = () => {
		mutate(chatRoomId, {
			onError: e => console.log(e),
		});
		closeModal();
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}`);
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
				<S.NavWrapper>
					<IoIosArrowBack size={25} onClick={handleExit} />
					<S.UserContainer onClick={handleInfo}>
						<img src={data?.result.url} alt="profile" />
						<p>{title}</p>
					</S.UserContainer>
				</S.NavWrapper>
				<S.Menu>
					<p onClick={() => setOpen(!open)}>메뉴</p>
					<S.PopoverWrapper $open={open}>
						<PopOver items={items} />
					</S.PopoverWrapper>
				</S.Menu>
			</S.NavContainer>
			<S.MessageContainer>
				{messageData?.map(page =>
					page.result.chatResponseList.map(e =>
						e.senderDTO.senderId === userId ? (
							<S.MyContainer key={e.chatId}>
								<S.MyMessage>{e.content}</S.MyMessage>
							</S.MyContainer>
						) : (
							<ReceiveMessage member={e} key={e.chatId} />
						),
					),
				)}

				{messages.map((e, idx) =>
					e.senderDTO?.senderName ? (
						<ReceiveMessage member={e} key={idx} />
					) : (
						e.chatType === 'TALK' && (
							<S.MyContainer key={idx}>
								<S.MyMessage>{e.content}</S.MyMessage>
							</S.MyContainer>
						)
					),
				)}
				<div ref={ref}>
					{isFetchingNextPage && <div>Loading more messages...</div>}
				</div>
			</S.MessageContainer>
			<S.InputContainer onSubmit={handleSend}>
				<S.IconWrapper>
					<HiOutlinePhotograph size={25} />
					<FaRegSmile size={23} />
				</S.IconWrapper>
				<input
					placeholder="메시지를 입력해주세요. (Enter: 전송 / Shift + Enter: 줄바꿈)"
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
				<button type="submit">
					<FiSend size={25} />
				</button>
			</S.InputContainer>
		</S.Container>
	);
};

export default Message;
