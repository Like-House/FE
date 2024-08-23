import * as S from './FamilyMember.style';
import { CustomButton, Avatar } from '@/components/index.js';
import useGetFamilyImg from '@/hooks/queries/family/useGetFamilyImg';
import useGetProfile from '@/hooks/queries/user/useGetProfile';

const FamilyMember = ({ member, index, handleEditClick }) => {
	const { data } = useGetFamilyImg(member.profileImage, member.userId);
	const profile = useGetProfile();

	const isCurrentUser = profile.data.userId === member.userId;

	return (
		<S.Container>
			<S.MemberInfoWrapper>
				<S.MemberInfo>
					<S.AvatarWrapper>
						<Avatar
							src={data?.url}
							size="md"
							shape="circle"
							alt={`${member?.name} avatar`}
						/>
						{isCurrentUser && (
							<S.EditIcon>
								<img
									src="/src/assets/images/settings.png"
									alt="Edit"
									onClick={() => handleEditClick(index)}
								/>
							</S.EditIcon>
						)}
					</S.AvatarWrapper>
					<S.MemberDetails>
						<S.MemberNameRole>
							<S.MemberName>
								{member.name}
								{member.isManager && <S.HostTag>주최자</S.HostTag>}
							</S.MemberName>
							<S.MemberRole>{member?.nickname}</S.MemberRole>
						</S.MemberNameRole>
					</S.MemberDetails>
				</S.MemberInfo>

				<S.CustomButtonWrapper $isCurrentUser={isCurrentUser}>
					<CustomButton
						btnType="secondary"
						label="정보 수정"
						onClick={() => handleEditClick(index)}
					/>
				</S.CustomButtonWrapper>
			</S.MemberInfoWrapper>
			<S.MemberDescription>{member?.memo}</S.MemberDescription>
		</S.Container>
	);
};

export default FamilyMember;
