import * as S from './FamilyList.style';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_PATH } from '@/constants/path';
import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import { FamilyMember } from '@/components';
import plusSettingIcon from '@/assets/images/plusSetting.png';

function FamilyList() {
	const navigate = useNavigate();
	const location = useLocation();
	const { data: familyData } = useGetFamilyList();
	const { data: currentUser } = useGetProfile();
	const [familyMembers, setFamilyMembers] = useState([]);
	const [currentUserData, setCurrentUserData] = useState(null);

	useEffect(() => {
		if (familyData && currentUser) {
			setCurrentUserData(
				familyData.familyDataList.find(
					member => member.userId === currentUser.userId,
				),
			);
			setFamilyMembers(familyData.familyDataList);
		}
	}, [familyData, currentUser]);

	useEffect(() => {
		if (
			location.state?.updatedMember &&
			typeof location.state.index === 'number'
		) {
			const updatedMembers = [...familyMembers];
			updatedMembers[location.state.index] = location.state.updatedMember;
			setFamilyMembers(updatedMembers);
		}
	}, [location.state]);

	const handleEditClick = index => {
		navigate(`${PAGE_PATH.FAMILY_EDIT}`, {
			state: { member: familyMembers[index], index },
		});
	};

	const handleMoreIconClick = () => {
		navigate(`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}`);
	};

	return (
		<S.Container>
			<S.MoreSection>
				<S.MoreTitle>더보기</S.MoreTitle>
				<S.MoreIcon
					src={plusSettingIcon}
					alt="더보기 아이콘"
					onClick={handleMoreIconClick}
				/>
			</S.MoreSection>

			{currentUserData && (
				<S.MobileOnly>
					<FamilyMember
						member={currentUserData}
						index={-1}
						handleEditClick={() => handleEditClick(-1)}
					/>
				</S.MobileOnly>
			)}

			<S.Section>
				<S.SectionTitle>가족 목록</S.SectionTitle>
				<S.MemberCount>({familyMembers.length}명)</S.MemberCount>
			</S.Section>
			<S.FamilyList>
				{familyMembers?.map((member, index) => (
					<FamilyMember
						key={member.userId}
						member={member}
						index={index}
						handleEditClick={handleEditClick}
					/>
				))}
			</S.FamilyList>
		</S.Container>
	);
}

export default FamilyList;
