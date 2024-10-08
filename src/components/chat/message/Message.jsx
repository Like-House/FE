import { useEffect, useRef, useState } from 'react';
import * as S from './Message.style';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { GoBellSlash } from 'react-icons/go';
import { RxExit } from 'react-icons/rx';
import { TbPhoto } from 'react-icons/tb';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { CgTrash } from 'react-icons/cg';
import { Alert, Emoticon, FileModal, PopOver } from '@/components/index.js';
import ReceiveMessage from '@/components/chat/receivemessage/ReceiveMessage.jsx';
import useExitChatRoom from '@/hooks/queries/chat/useExitChatRoom';
import useModal from '@/hooks/useModal';
import useGetRealImageUrl from '@/hooks/queries/image/useGetRealImage';
import useGetMessage from '@/hooks/queries/chat/useGetMessage';
import useWebSocketStore from '@/store/useWebSocketStore';
import useUserIdStore from '@/store/useUserIdStore';
import { PAGE_PATH, QUERY_KEYS } from '@/constants';
import useModalStore from '@/store/useModalStore';
import useGetEmoticon from '@/hooks/queries/chat/useGetEmoticon';
import useGetFamilySpaceId from '@/hooks/queries/family/useGetFamilySpaceId';
import Mymessage from './myMessage/Mymessage';
import NOIMG from '@/assets/images/profile.webp';
import useFile from '@/hooks/useFile';
import queryClient from '@/apis/queryClient';

const Message = ({ room }) => {
	const messageEndRef = useRef();
	const { handleFileSelectAndSend } = useFile();
	const { fileOpen, setDelete } = useModalStore(state => state);
	const [emoticon, setEmoticon] = useState(false);
	const [emoOpen, setEmoOpen] = useState(false);
	const [open, setOpen] = useState();
	const { chatRoomId, imageKeyName, title } = room;
	const { mutate } = useExitChatRoom();
	const { isOpen, openModal, closeModal } = useModal();
	const { data } = useGetRealImageUrl({ chatRoomId, imageUrl: imageKeyName });
	const nav = useNavigate();
	const { userId } = useUserIdStore();
	const [input, setInput] = useState('');
	const { data: spaceData } = useGetFamilySpaceId();
	const { data: emoticonData } = useGetEmoticon({
		familySpaceId: spaceData?.familySpaceId,
	});
	const {
		messages,
		sendMessage,
		enterChatRoom,
		exitChatRoom,
		enter,
		clearMessages,
	} = useWebSocketStore();
	const {
		data: messageData,
		fetchPreviousPage,
		hasPreviousPage,
		isFetching,
	} = useGetMessage({
		chatRoomId,
		take: 20,
	});

	const [pageRendered, setPageRendered] = useState(false);
	const [adjustingScroll, setAdjustingScroll] = useState(false);
	const listRef = useRef();
	let hasMessages = !!messageData;

	const { ref, inView } = useInView({
		threshold: 1,
		delay: 0,
		skip: !pageRendered,
	});

	useEffect(() => {
		if (inView && pageRendered) {
			if (!isFetching && hasPreviousPage && !adjustingScroll) {
				const previousScrollHeight = listRef.current?.scrollHeight;

				fetchPreviousPage().then(() => {
					setAdjustingScroll(true);

					setTimeout(() => {
						if (listRef.current) {
							listRef.current.scrollTop =
								listRef.current.scrollHeight - previousScrollHeight;
						}
					}, 0);

					setTimeout(() => {
						setAdjustingScroll(false);
					}, 2000);
				});
			}
		}
	}, [inView, isFetching]);

	useEffect(() => {
		if (hasMessages) {
			if (listRef.current) {
				listRef.current.scrollTop = listRef.current?.scrollHeight;
			}
			setPageRendered(true);
		}
	}, [hasMessages, chatRoomId]);

	useEffect(() => {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	useEffect(() => {
		if (chatRoomId) {
			enterChatRoom(chatRoomId);
		}

		clearMessages();

		return () => {
			if (enter) {
				exitChatRoom(chatRoomId);
			}
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.CHATROOMS, chatRoomId, 'message'],
			});
		};
	}, [chatRoomId]);

	const handleSend = e => {
		e.preventDefault();
		if (input.trim()) {
			const message = JSON.stringify({
				chatType: 'TALK',
				imageKeyName: null,
				content: input,
				chatRoomId,
			});
			sendMessage(message);
			setInput('');
		}
	};

	const submitEmoticon = keyname => {
		const message = JSON.stringify({
			chatType: 'TALK',
			imageKeyName: keyname,
			content: null,
			chatRoomId,
		});
		sendMessage(message);
		setInput('');
	};

	const handleExit = () => {
		exitChatRoom(chatRoomId);
		clearMessages();
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}`);
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

	const emoItems = [
		{
			icon: <HiOutlinePlusCircle size={20} />,
			message: '가족티콘 추가',
			onClick: fileOpen,
		},
		{
			icon: <CgTrash size={20} />,
			message: '가족티콘 삭제',
			onClick: setDelete,
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
						{imageKeyName ? (
							<img src={data?.result.url} alt="profile" />
						) : (
							<img src={NOIMG} alt="profile" />
						)}

						<p>{title ? title : '알 수 없음'}</p>
					</S.UserContainer>
				</S.NavWrapper>
				<S.Menu>
					<p onClick={() => setOpen(!open)}>메뉴</p>
					<S.PopoverWrapper $open={open}>
						<PopOver items={items} onMouseLeave={() => setOpen(!open)} />
					</S.PopoverWrapper>
				</S.Menu>
			</S.NavContainer>
			<S.MessageContainer ref={listRef}>
				{!adjustingScroll && pageRendered && <div ref={ref} />}
				{messageData?.map(page =>
					page.result.chatResponseList.map(e =>
						e.senderDTO.senderId === userId ? (
							<Mymessage message={e} key={e.chatId} />
						) : (
							<ReceiveMessage member={e} key={e.chatId} />
						),
					),
				)}

				{messages.map((e, idx) =>
					e.senderDTO?.senderName ? (
						<ReceiveMessage member={e} key={idx} />
					) : (
						e.chatType === 'TALK' && <Mymessage message={e} key={idx} />
					),
				)}
				<div ref={messageEndRef} />
			</S.MessageContainer>
			<S.InputContainer onSubmit={handleSend} $emoticon={emoticon}>
				<S.IconWrapper>
					<S.FileInput
						multiple
						type="file"
						id="file"
						onChange={e => handleFileSelectAndSend(e, chatRoomId)}
					/>
					<label htmlFor="file">
						<HiOutlinePhotograph size={25} />
					</label>
					<FaRegSmile size={23} onClick={() => setEmoticon(prev => !prev)} />
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
			<S.Emoticon $emoticon={emoticon}>
				<S.EmotionBtn onClick={() => setEmoOpen(prev => !prev)}>
					<p>수정</p>
					<S.EmoPopOver $emoOpen={emoOpen}>
						<PopOver items={emoItems} />
					</S.EmoPopOver>
				</S.EmotionBtn>
				<S.EmoticonWrapper>
					{emoticonData?.map(e => (
						<Emoticon
							emoticon={e}
							key={e.familyEmoticonId}
							familySpaceId={spaceData?.familySpaceId}
							onClick={submitEmoticon}
						/>
					))}
				</S.EmoticonWrapper>
			</S.Emoticon>
			<FileModal />
		</S.Container>
	);
};

export default Message;
