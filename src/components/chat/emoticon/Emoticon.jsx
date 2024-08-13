import * as S from './Emoticon.style';

import { FaCircleMinus } from 'react-icons/fa6';
import useGetEmoticonImg from '@/hooks/queries/image/useGetEmoticonImg';
import useModalStore from '@/store/useModalStore';
import useDeleteEmoticon from '@/hooks/queries/chat/useDeleteEmoticon';

const Emoticon = ({ emoticon, familySpaceId }) => {
	const { deleteState, setDelete } = useModalStore();
	const { imageKeyName, familyEmoticonId } = emoticon;
	const { data } = useGetEmoticonImg({
		imageUrl: imageKeyName,
		familyEmoticonId,
	});
	const { mutate } = useDeleteEmoticon();

	const handleDelete = () => {
		mutate({ familySpaceId, familyEmoticonId });
		setDelete(false);
	};

	return (
		<S.Container>
			<img src={data?.url} />
			<S.deleteIcon $deleteState={deleteState}>
				<FaCircleMinus onClick={handleDelete} />
			</S.deleteIcon>
		</S.Container>
	);
};

export default Emoticon;
