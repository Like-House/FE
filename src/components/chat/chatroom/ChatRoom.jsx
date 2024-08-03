import { useChatRoom } from '../../../store';
import Avatar from '../../common/avatar/Avatar';
import * as S from './ChatRoom.style';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage';

const ChatRoom = ({ room }) => {
	const { setChatRoom } = useChatRoom();
	const { chatRoomId, title, imageUrl } = room;

	const handleClick = () => {
		setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageUrl });
	};

	const { data, isPending } = useGetRealImageUrl({ imageUrl, chatRoomId });

	return (
		<S.Container onClick={handleClick}>
			{isPending ? <div>123</div> : <Avatar src={data?.result.url} size="sm" />}
			<S.UserContainer>
				<div>
					<h4>{title}</h4>
				</div>
			</S.UserContainer>
		</S.Container>
	);
};

export default ChatRoom;
