import * as S from './Chatbar.style';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import useDropdownStore from '../../../store/useDropdownStore';
import Modal from '../modal/Modal';
import useModalStore from '../../../store/useModalStore';
import ChatRoom from '../chatroom/ChatRoom';
import useGetChatRoom from '../../../hooks/queries/chat/useGetChatRoom';
import { useChatRoom } from '../../../store';
import { useEffect } from 'react';

const Chatbar = () => {
	const { chatDropdown, chatDropdownOpen } = useDropdownStore(state => state);
	const { open } = useModalStore(state => state);
	const { setChatRoom } = useChatRoom();

	const onClick = () => {
		open();
		chatDropdownOpen();
	};

	const { data, isSuccess } = useGetChatRoom({
		familySpaceId: 1,
		cursor: -1,
		take: 5,
	});

	useEffect(() => {
		if (isSuccess && data.result.chatRoomResponses) {
			const { chatRoomId, title, imageUrl } = data.result.chatRoomResponses[0];
			setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageUrl });
		}
	}, [isSuccess, data]);

	let content;

	if (data) {
		content = (
			<>
				{data.result.chatRoomResponses.map(e => (
					<ChatRoom room={e} key={e.chatRoomId} />
				))}
			</>
		);
	}

	return (
		<S.Container>
			<S.ButtonContainer>
				<S.Button onClick={chatDropdownOpen}>
					<p>새로 만들기</p>
					<IoIosArrowDown />
				</S.Button>
				<S.CreateBox $open={chatDropdown}>
					<li onClick={onClick}>일반 채팅방</li>
					<Modal />
					<li>가족 단체 채팅방</li>
				</S.CreateBox>
			</S.ButtonContainer>
			<S.Search>
				<input type="text" placeholder="메시지방, 메시지 검색" />
				<CiSearch size={20} />
			</S.Search>
			{content}
		</S.Container>
	);
};

export default Chatbar;
