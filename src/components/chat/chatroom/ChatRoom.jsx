import Avatar from '../../common/avatar/Avatar';
import * as S from './ChatRoom.style';
import { formatDate } from '../../../utils';

const ChatRoom = ({ chat }) => {
	const { imageUrl, updateAt, chatRoomId } = chat;

	return (
		<S.Container>
			<Avatar src={imageUrl} size="sm" />
			<S.UserContainer>
				<div>
					<h4>{chatRoomId}</h4>
					<p>{formatDate(updateAt)}</p>
				</div>
				<></>
			</S.UserContainer>
		</S.Container>
	);
};

export default ChatRoom;
