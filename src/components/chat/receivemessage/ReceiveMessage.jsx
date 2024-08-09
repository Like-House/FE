import { Avatar } from '../../';
import useGetFamilyImg from '../../../hooks/queries/family/useGetFamilyImg';
import * as S from './ReceiveMessage.style';
import NOIMG from '../../../assets/images/profile.webp';

const ReceiveMessage = ({ member }) => {
	const { data } = useGetFamilyImg(
		member.senderDTO.senderProfile,
		member.senderDTO.senderId,
	);

	return (
		<S.YourMessageContainer>
			<S.Profile>
				<Avatar
					src={member.senderDTO.senderProfile ? data?.url : NOIMG}
					size="sm"
				/>
				<p>{member.senderDTO.senderName}</p>
			</S.Profile>
			<S.YourMessage>{member.content}</S.YourMessage>
		</S.YourMessageContainer>
	);
};

export default ReceiveMessage;
