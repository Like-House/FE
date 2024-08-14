import * as S from './ChatRoom.style';

import { useNavigate } from 'react-router-dom';

import { Avatar } from '@/components/index.js';
import useGetRealImageUrl from '@/hooks/queries/image/useGetRealImage';
import { useChatRoom } from '@/store';
import { PAGE_PATH } from '@/constants';
import NOIMG from '@/assets/images/profile.webp';

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
				<Avatar src={NOIMG} size="sm" />
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
