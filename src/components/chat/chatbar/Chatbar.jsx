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
import useGetFamilyList from '../../../hooks/queries/family/useGetFamilyList';
import useCreateChatRoom from '../../../hooks/queries/chat/useCreateChatRoom';

const Chatbar = () => {
	const { chatDropdown, chatDropdownOpen } = useDropdownStore(state => state);
	const { open } = useModalStore(state => state);
	const { setChatRoom, clear } = useChatRoom();

	const { data: familyData } = useGetFamilyList();
	const { mutate } = useCreateChatRoom();

	const onClick = () => {
		open();
		chatDropdownOpen();
	};

	const creatGroupChatRoom = () => {
		if (familyData) {
			const members = familyData.familyDataList.map(e => e.name);
			const membersId = familyData.familyDataList
				.map(e => e.userId)
				.filter(id => id !== 1); // 1은 지금 내 아이디라 변경할 필요 있음
			mutate({
				familySpaceId: 1, // 여기도 내꺼로 변경
				title: members.join(',') + ' (' + familyData.size + ')',
				imageUrl: '프로필',
				chatRoomType: 'GROUP',
				roomParticipantIds: membersId,
			});
			chatDropdownOpen();
		}
	};

	const { data, isSuccess } = useGetChatRoom({
		familySpaceId: 1,
		cursor: -1,
		take: 10,
	});

	useEffect(() => {
		if (isSuccess && data.result.chatRoomResponses) {
			if (data.result.chatRoomResponses.length === 0) {
				clear();
			} else {
				const { chatRoomId, title, imageUrl } =
					data.result.chatRoomResponses[0];
				setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageUrl });
			}
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
					{familyData && <Modal members={familyData.familyDataList} />}
					<li onClick={creatGroupChatRoom}>가족 단체 채팅방</li>
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
