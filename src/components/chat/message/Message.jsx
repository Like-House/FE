import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import * as S from './Message.style';
import { useChatRoom } from '../../../store';
// import PopOver from '../../common/popover/PopOver';
// import { GoBellSlash } from 'react-icons/go';

const Message = () => {
	const { chatTitle, chatImg } = useChatRoom();

	// const items = [{ icon: <GoBellSlash />, message: '알람 끄기' }];

	return (
		<S.Container>
			<S.NavContainer>
				<S.UserContainer>
					<img src={chatImg} alt="profile" />
					<p>{chatTitle}</p>
				</S.UserContainer>
				{/* <PopOver items={items} /> */}
			</S.NavContainer>

			<S.InputContainer>
				<S.IconWrapper>
					<HiOutlinePhotograph size={25} />
					<FaRegSmile size={23} />
				</S.IconWrapper>
				<input placeholder="메시지를 입력해주세요. (Enter: 전송 / Shift + Enter: 줄바꿈)" />
				<FiSend size={25} />
			</S.InputContainer>
		</S.Container>
	);
};

export default Message;
