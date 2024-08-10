import * as S from './FamilyList.style';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_PATH } from '@/constants/path';
import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import { FamilyMember } from '@/components';

function FamilyList() {
	const navigate = useNavigate();
	const location = useLocation();
	const { data: familyData } = useGetFamilyList();
	const [familyMembers, setFamilyMembers] = useState([]);

	useEffect(() => {
		if (familyData) {
			setFamilyMembers(familyData.familyDataList);
		}
	}, [familyData]);

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

	return (
		<S.Container>
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
