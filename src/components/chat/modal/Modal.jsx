import { BsXCircle } from 'react-icons/bs';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import * as S from './Modal.style';
import useModalStore from '../../../store/useModalStore';
import theme from '../../../theme/theme';
import { CustomButton, Dropdown, ModalPortal } from '../../';
import useCreateChatRoom from '../../../hooks/queries/chat/useCreateChatRoom';
import useGetFamilySpaceId from '../../../hooks/queries/family/useGetFamilySpaceId';
import useUserIdStore from '../../../store/useUserIdStore';

const Modal = ({ members }) => {
	const { open, chatModal } = useModalStore(state => state);
	const { userId } = useUserIdStore(state => state);

	let selectMember;

	const options = members.map(e => e.userId !== userId && e.name);

	const onSelect = menu => {
		selectMember = members.filter(e => e.name === menu)[0];
		console.log(selectMember);
	};

	const { data: spaceIdData } = useGetFamilySpaceId();
	const { mutate } = useCreateChatRoom();

	const CreateChatRoom = () => {
		if (selectMember) {
			mutate({
				familySpaceId: spaceIdData?.familySpaceId,
				title: selectMember.name,
				imageKeyName: selectMember.profileImage,
				chatRoomType: 'GENERAL',
				roomParticipantIds: [selectMember.userId],
			});
			open();
		} else {
			alert('가족을 선택해주세요!');
		}
	};

	return (
		<ModalPortal>
			<S.Container $chatModal={chatModal}>
				<S.Wrapper>
					<BsXCircle className="close" onClick={() => open()} size={16} />
					<S.DropdownWrapper>
						<p>가족선택</p>
						<Dropdown
							label="가족 구성원을 선택해주세요."
							options={options}
							openIcon={<RiArrowDropDownLine size={25} />}
							closeIcon={<RiArrowDropUpLine size={25} />}
							onSelect={onSelect}
							bgColor={theme.COLOR.BACKGROUND.WHITE}
						/>
					</S.DropdownWrapper>
					<CustomButton
						label="채팅방 만들기"
						btnType="primary"
						onClick={CreateChatRoom}
					/>
				</S.Wrapper>
			</S.Container>
		</ModalPortal>
	);
};

export default Modal;
