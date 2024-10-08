import * as S from './Chatbar.style';

import { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

import Modal from '@/components/chat/modal/Modal.jsx';
import { ChatRoom } from '@/components/index.js';
import useDropdownStore from '@/store/useDropdownStore';
import useModalStore from '@/store/useModalStore';
import useUserIdStore from '@/store/useUserIdStore';
import useGetChatRoom from '@/hooks/queries/chat/useGetChatRoom';
import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import useCreateChatRoom from '@/hooks/queries/chat/useCreateChatRoom';
import useGetFamilySpaceId from '@/hooks/queries/family/useGetFamilySpaceId';
import { useInView } from 'react-intersection-observer';
import useThrottling from '@/hooks/useThrottling';

const Chatbar = () => {
	const { chatDropdown, chatDropdownOpen } = useDropdownStore(state => state);
	const { open } = useModalStore(state => state);
	const { data: familyData } = useGetFamilyList();
	const { mutate } = useCreateChatRoom();
	const { data: spaceIdData } = useGetFamilySpaceId();
	const { data, fetchNextPage, isFetching, hasNextPage } = useGetChatRoom({
		familySpaceId: spaceIdData?.familySpaceId,
		take: 10,
	});
	const { setUserId } = useUserIdStore(state => state);
	const { ref, inView } = useInView({
		threshold: 0,
		delay: 0,
		initialInView: false,
	});

	const throttlingNewPage = useThrottling(fetchNextPage, 1 * 1000);

	useEffect(() => {
		if (inView) {
			!isFetching && hasNextPage && throttlingNewPage();
		}
	}, [inView, isFetching, hasNextPage]);

	useEffect(() => {
		if (data && data.length > 0 && data[0]?.result?.ownerId) {
			setUserId(data[0].result.ownerId);
		}
	}, [data]);

	const onClick = () => {
		if (familyData && familyData.size > 1) {
			open();
			chatDropdownOpen();
		} else {
			alert('가족 구성원이 아직 없습니다.');
			chatDropdownOpen();
		}
	};

	const creatGroupChatRoom = () => {
		if (familyData && familyData.size > 2) {
			const members = familyData.familyDataList.map(e => e.name);
			const membersId = familyData.familyDataList
				.map(e => e.userId)
				.filter(id => id !== data[0].result.ownerId);
			mutate({
				familySpaceId: spaceIdData?.familySpaceId,
				title: members.join(',') + ' (' + familyData.size + ')',
				imageKeyName: null,
				chatRoomType: 'GROUP',
				roomParticipantIds: membersId,
			});
			chatDropdownOpen();
		} else {
			alert('전체 가족 구성원이 2명 이하입니다.');
			chatDropdownOpen();
		}
	};

	let content;

	if (data) {
		content = (
			<>
				{data.map(e =>
					e?.result.chatRoomResponses.map(e => (
						<ChatRoom room={e} key={e.chatRoomId} />
					)),
				)}
			</>
		);
	}

	return (
		<S.Container>
			<S.HeaderContaienr>
				<h1>채팅</h1>
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
			</S.HeaderContaienr>
			<S.Search>
				<input type="text" placeholder="메시지방, 메시지 검색" />
				<CiSearch size={20} />
			</S.Search>
			<S.ChatRoomContainer>
				{content}
				<div ref={ref} />
			</S.ChatRoomContainer>
		</S.Container>
	);
};

export default Chatbar;
