import { Chatbar } from '../../components';
import Message from '../../components/chat/message/Message';
import * as S from './ChatMainPage.style';

const ChatMainPage = () => {
	return (
		<S.Container>
			<Chatbar />
			<Message />
		</S.Container>
	);
};

export default ChatMainPage;
