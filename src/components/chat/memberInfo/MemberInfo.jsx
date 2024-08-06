import * as S from './MemberInfo.style';
import { Avatar } from '../../';
import useGetMemberProfile from '../../../hooks/queries/chat/useGetMemberProfile';

const MemberInfo = ({ member }) => {
	const { username, userProfile, userId } = member;

	// const { data } = useGetMemberProfile({ imageUrl: userProfile, userId });

	return (
		<S.Container>
			{/* <Avatar src={}/> */}
			<div>{username}</div>
		</S.Container>
	);
};

export default MemberInfo;
