import * as S from './Emoticon.style';

import useGetEmoticonImg from '@/hooks/queries/image/useGetEmoticonImg';

const Emoticon = ({ emoticon }) => {
	const { imageKeyName, familyEmoticonId } = emoticon;
	const { data } = useGetEmoticonImg({
		imageUrl: imageKeyName,
		familyEmoticonId,
	});

	return (
		<S.Container>
			<img src={data?.url} />
		</S.Container>
	);
};

export default Emoticon;
