import * as S from './Mymessage.style';

import { useEffect, useState } from 'react';
import { getRealImageUrl } from '@/apis';

const Mymessage = ({ message }) => {
	const { content, imageKeyName } = message;
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
		<S.MyContainer>
			{content && content !== 'null' ? (
				<S.MyMessage>{content}</S.MyMessage>
			) : (
				<img src={emoticon} />
			)}
		</S.MyContainer>
	);
};

export default Mymessage;
