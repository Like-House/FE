import { Chatbar, Message } from '../../components';
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
