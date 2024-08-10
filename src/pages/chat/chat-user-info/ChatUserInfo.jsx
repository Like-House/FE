import * as S from './ChatUserInfo.style';

import { useParams } from 'react-router-dom';
import { MemberInfo } from '@/components';
import useGetChatRoomUsers from '@/hooks/queries/chat/useGetChatRoomUsers';

const ChatUserInfo = () => {
	const { chatRoomId } = useParams();
	const { data } = useGetChatRoomUsers(chatRoomId);

	return (
		<S.Container>
			<h1>채팅방 맴버</h1>
			<S.MemberWrapper>
				{data?.map(e => (
					<MemberInfo member={e} key={e.userId} />
				))}
			</S.MemberWrapper>
		</S.Container>
	);
};

export default ChatUserInfo;
