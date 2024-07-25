import * as S from './Chatbar.style';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import useDropdownStore from '../../../store/useDropdownStore';
import ChatRoom from '../chatroom/ChatRoom';
import { DUMMY_CHAT_LIST } from '../../../mockdata/chat';

const Chatbar = () => {
	const { chatDropdown, chatDropdownOpen } = useDropdownStore(state => state);

	return (
		<S.Container>
			<S.ButtonContainer>
				<S.Button onClick={chatDropdownOpen}>
					<p>새로 만들기</p>
					<IoIosArrowDown />
				</S.Button>
				<S.CreateBox $open={chatDropdown}>
					<li>일반 채팅방</li>
					<li>가족 단체 채팅방</li>
				</S.CreateBox>
			</S.ButtonContainer>
			<S.Search>
				<input type="text" placeholder="메시지방, 메시지 검색" />
				<CiSearch size={20} />
			</S.Search>
			{DUMMY_CHAT_LIST.map(e => (
				<ChatRoom key={e.chatId} chat={e} />
			))}
		</S.Container>
	);
};

export default Chatbar;
