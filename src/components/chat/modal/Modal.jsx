import { BsXCircle } from 'react-icons/bs';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import * as S from './Modal.style';
import useModalStore from '../../../store/useModalStore';
import theme from '../../../theme/theme';
import { CustomButton, Dropdown, ModalPortal } from '../../';

const Modal = () => {
	const { open, chatModal } = useModalStore(state => state);

	const options = ['아빠', '엄마', '동생'];

	const onSelect = menu => {
		console.log(menu);
	};

	const CreateChatRoom = () => {
		// 채팅방 생성 로직
		open();
	};

	return (
		<ModalPortal>
			<S.Container $chatModal={chatModal}>
				<S.Wrapper>
					<BsXCircle className="close" onClick={() => open()} size={16} />
					<S.DropdownWrapper>
						<p>가족선택</p>
						<Dropdown
							label={options[0]}
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
