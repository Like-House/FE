import { Outlet } from 'react-router-dom';
import * as S from './ChatMainPage.style';
import { Chatbar } from '../../components';

const ChatMainPage = () => {
	return (
		<S.Container>
			<Chatbar />
			<S.OutletWrapper>
				<Outlet />
			</S.OutletWrapper>
		</S.Container>
	);
};

export default ChatMainPage;
