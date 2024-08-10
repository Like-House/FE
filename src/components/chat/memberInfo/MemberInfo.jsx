import * as S from './MemberInfo.style';

import { Avatar } from '@/components/index.js';
import useGetMemberProfile from '@/hooks/queries/chat/useGetMemberProfile';
import NOIMG from '@/assets/images/chatRoomImg.webp';

const MemberInfo = ({ member }) => {
	const { username, userProfile, userId } = member;
	const { data } = useGetMemberProfile({ imageUrl: userProfile, userId });

	return (
		<S.Container>
			{member.userProfile ? (
				<Avatar src={data?.result.url} />
			) : (
				<Avatar src={NOIMG} /> // 이 이미지는 수정 예정
			)}
			<div>{username}</div>
		</S.Container>
	);
};

export default MemberInfo;
