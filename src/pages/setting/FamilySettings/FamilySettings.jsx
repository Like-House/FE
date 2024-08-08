import { useState } from 'react';
import * as S from './FamilySettings.style';
import { Alert, UserBox } from '../../../components/index';
import useModal from '../../../hooks/useModal';
import useGetFamilyList from '../../../hooks/queries/family/useGetFamilyList';
import useBlockFamilyMember from '../../../hooks/queries/family/useBlockFamilyMember';
import useUnblockFamilyMember from '../../../hooks/queries/family/useUnblockFamilyMember';

function FamilySettings() {
	const { data: familyData } = useGetFamilyList();
	const { mutate: blockMember } = useBlockFamilyMember();
	const { mutate: unblockMutate } = useUnblockFamilyMember();
	const [selectedMember, setSelectedMember] = useState(null);
	const [selectedAction, setSelectedAction] = useState(null);
	const { isOpen, openModal, closeModal } = useModal();

	const handleConfirm = () => {
		if (selectedAction === 'block') {
			blockMember(selectedMember.userId);
		} else {
			unblockMutate(selectedMember.userId);
		}
		closeModal();
	};

	const handleOpenModal = (member, action) => {
		setSelectedMember(member);
		setSelectedAction(action);
		openModal();
	};

	const handleCancel = () => {
		closeModal();
	};

	return (
		<S.Container>
			<S.Section>
				<S.SectionTitle>가족 목록</S.SectionTitle>
				<S.FamilyList>
					{familyData?.familyDataList.map(member => (
						<UserBox
							block={true}
							member={member}
							key={member.userId}
							handleOpenModal={handleOpenModal}
						/>
					))}
				</S.FamilyList>
			</S.Section>
			<S.Section>
				<S.SectionTitle>차단 목록</S.SectionTitle>
				<S.FamilyList>
					{familyData?.blockFamilyDataList.length === 0 ? (
						<S.EmptyMessage>차단된 가족이 없습니다.</S.EmptyMessage>
					) : (
						familyData?.blockFamilyDataList.map(member => (
							<UserBox
								member={member}
								key={member.userId}
								handleOpenModal={handleOpenModal}
							/>
						))
					)}
				</S.FamilyList>
			</S.Section>

			<Alert
				isOpen={isOpen && selectedAction === 'block'}
				message="해당 가족을 차단할까요?"
				detailMessage="이 가족을 차단하면 가족과 관련된 게시글, 채팅, 알림, 일정 등이 모두 삭제됩니다. 한 번 삭제된 가족 데이터는 다시 복구할 수 없습니다."
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>

			<Alert
				isOpen={isOpen && selectedAction === 'unblock'}
				message="해당 가족을 차단 해제할까요?"
				detailMessage="이 가족을 차단 해제하면 차단 목록에서 보이지 않게 됩니다. 해당 가족은 다시 가족으로 추가하여 가족 공간에 참여할 수 있습니다."
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		</S.Container>
	);
}

export default FamilySettings;
