import * as S from './UserBox.style';
import { CustomButton, Avatar } from '../../';
import theme from '../../../theme/theme';
import useGetFamilyImg from '../../../hooks/queries/family/useGetFamilyImg';

const { COLOR } = theme;

const UserBox = ({ member, handleOpenModal, block }) => {
	const { data } = useGetFamilyImg(member.profileImage, member.userId);

	return (
		<S.FamilyMember>
			<S.MemberInfo>
				<Avatar
					src={data?.url}
					size="md"
					shape="circle"
					alt={`${member.name} avatar`}
				/>
				<S.MemberDetails>
					<S.MemberName>{member.name}</S.MemberName>
					<S.MemberRole>{member.nickname}</S.MemberRole>
				</S.MemberDetails>
			</S.MemberInfo>
			<S.Actions>
				<CustomButton
					btnType="outline"
					outlineColor={COLOR.MAIN.YELLOW}
					label={block ? '차단' : '차단 해제'}
					onClick={
						block
							? () => handleOpenModal(member, 'block')
							: () => handleOpenModal(member, 'unblock')
					}
				/>
			</S.Actions>
		</S.FamilyMember>
	);
};

export default UserBox;
