import * as S from './Mymessage.style';

import useGetSendEmoticon from '@/hooks/queries/image/useGetSendEmoticon';

const Mymessage = ({ message }) => {
	const { content, imageKeyName } = message;
	const { data } = useGetSendEmoticon({ imageUrl: imageKeyName });

	return (
		<S.MyContainer>
			{content && content !== 'null' ? (
				<S.MyMessage>{content}</S.MyMessage>
			) : (
				<img src={data?.url} />
			)}
		</S.MyContainer>
	);
};

export default Mymessage;
