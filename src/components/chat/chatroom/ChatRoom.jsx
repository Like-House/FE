import { useChatRoom } from '../../../store';
import Avatar from '../../common/avatar/Avatar';
import * as S from './ChatRoom.style';
import useGetRealImageUrl from '../../../hooks/queries/image/useGetRealImage';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';

const ChatRoom = ({ room }) => {
	const nav = useNavigate();
	const { setChatRoom } = useChatRoom();
	const { chatRoomId, title, imageKeyName } = room;

	const handleClick = () => {
		setChatRoom({ chatRoomId, chatTitle: title, chatImg: imageKeyName });
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}/${chatRoomId}`, {
			state: { ...room },
		});
	};

	const { data, isPending } = useGetRealImageUrl({
		imageUrl: imageKeyName,
		chatRoomId,
	});

	return (
		<S.Container onClick={handleClick}>
			{isPending ? (
				<Avatar src={''} size="sm" /> // TODO:다른 브랜치에 있는 사진 머지되면 기본 이미지로 변경
			) : (
				<Avatar src={data?.result.url} size="sm" />
			)}
			<S.UserContainer>
				<div>
					<h4>{title}</h4>
				</div>
			</S.UserContainer>
		</S.Container>
	);
};

export default ChatRoom;
