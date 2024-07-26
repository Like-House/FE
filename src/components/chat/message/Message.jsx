import { FiSend } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import * as S from './Message.style';

const Message = () => {
	return (
		<S.Container>
			<div>여기에 채팅내용</div>
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
