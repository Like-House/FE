import * as S from './ReceiveMessage.style';

import { Avatar } from '@/components/index.js';

import useGetFamilyImg from '@/hooks/queries/family/useGetFamilyImg';
import NOIMG from '@/assets/images/profile.webp';
import { useEffect, useState } from 'react';
import { getRealImageUrl } from '@/apis';

const ReceiveMessage = ({ member }) => {
	const { content, senderDTO, imageKeyName } = member;
	const { data } = useGetFamilyImg(
		member.senderDTO.senderProfile,
		member.senderDTO.senderId,
	);
	const [emoticon, setEmoticon] = useState(null);

	useEffect(() => {
		const fetchEmoticon = async () => {
			if (imageKeyName) {
				try {
					const emoticon = await getRealImageUrl(imageKeyName);
					setEmoticon(emoticon?.result.url);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchEmoticon();
	}, [imageKeyName]);

	return (
		<S.YourMessageContainer>
			<S.Profile>
				<Avatar src={senderDTO.senderProfile ? data?.url : NOIMG} size="sm" />
				<p>{senderDTO.senderName}</p>
			</S.Profile>
			{content && content !== 'null' ? (
				<S.YourMessage>{content}</S.YourMessage>
			) : (
				<S.Emoticon src={emoticon} />
			)}
		</S.YourMessageContainer>
	);
};

export default ReceiveMessage;
