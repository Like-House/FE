import * as S from './ReceiveMessage.style';

import { Avatar } from '@/components/index.js';

import useGetFamilyImg from '@/hooks/queries/family/useGetFamilyImg';
import NOIMG from '@/assets/images/profile.webp';
import useGetSendEmoticon from '@/hooks/queries/image/useGetSendEmoticon';

const ReceiveMessage = ({ member }) => {
	const { content, senderDTO, imageKeyName } = member;
	const { data } = useGetFamilyImg(
		member.senderDTO.senderProfile,
		member.senderDTO.senderId,
	);
	const { data: emoticonData } = useGetSendEmoticon({ imageUrl: imageKeyName });

	return (
		<S.YourMessageContainer>
			<S.Profile>
				<Avatar src={senderDTO.senderProfile ? data?.url : NOIMG} size="sm" />
				<p>{senderDTO.senderName}</p>
			</S.Profile>
			{content ? (
				<S.YourMessage>{content}</S.YourMessage>
			) : (
				<S.Emoticon src={emoticonData?.url} />
			)}
		</S.YourMessageContainer>
	);
};

export default ReceiveMessage;
