import { CustomButton, Avatar } from '../../';
import * as S from './FamilyMember.style';
import useGetFamilyImg from '../../../hooks/queries/family/useGetFamilyImg';

const FamilyMember = ({ member, index, handleEditClick }) => {
	const { data } = useGetFamilyImg(member.profileImage, member.userId);

	return (
		<S.Container>
			<S.MemberInfoWrapper>
				<S.MemberInfo>
					<Avatar
						src={data?.url}
						size="md"
						shape="circle"
						alt={`${member?.name} avatar`}
					/>
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
				<CustomButton
					btnType="secondary"
					label="정보 수정"
					onClick={() => handleEditClick(index)}
				/>
			</S.MemberInfoWrapper>
			<S.MemberDescription>{member?.memo}</S.MemberDescription>
		</S.Container>
	);
};

export default FamilyMember;
