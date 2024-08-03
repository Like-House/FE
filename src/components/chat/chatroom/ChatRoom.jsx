import { useChatRoom } from '../../../store';
import Avatar from '../../common/avatar/Avatar';
import * as S from './ChatRoom.style';

const ChatRoom = ({ room }) => {
	const { setChatRoom } = useChatRoom();
	const { chatRoomId, title, imageUrl } = room;

	const handleClick = () => {
		setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageUrl });
	};

	return (
		<S.Container onClick={handleClick}>
			<Avatar src={imageUrl} size="sm" />
			<S.UserContainer>
				<div>
					<h4>{title}</h4>
				</div>
			</S.UserContainer>
		</S.Container>
	);
};

export default ChatRoom;
