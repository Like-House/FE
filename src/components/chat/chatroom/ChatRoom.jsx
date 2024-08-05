import { useChatRoom } from '../../../store';
import Avatar from '../../common/avatar/Avatar';
import * as S from './ChatRoom.style';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';

const ChatRoom = ({ room }) => {
	const navigation = useNavigate();
	const { setChatRoom } = useChatRoom();
	const { chatRoomId, title, imageUrl } = room;

	const handleClick = () => {
		setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageUrl });

		if (window.innerWidth < 1024) {
			navigation(
				`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.CHAT_MESSAGE}/${chatRoomId}`,
			);
		}
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
