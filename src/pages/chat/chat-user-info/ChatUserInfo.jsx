import { useParams } from 'react-router-dom';
import * as S from './ChatUserInfo.style';
import useGetChatRoomUsers from '../../../hooks/queries/chat/useGetChatRoomUsers';
import { MemberInfo } from '../../../components';

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
