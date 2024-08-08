import { Outlet, useLocation } from 'react-router-dom';
import * as S from './ChatMainPage.style';
import { Chatbar } from '../../components';
import { useEffect, useState } from 'react';
import { PAGE_PATH } from '../../constants';
import { IoChatbubbles } from 'react-icons/io5';
import WebSocketComponent from '../../components/chat/webSocket/WebSocket';

const ChatMainPage = () => {
	const { pathname } = useLocation();
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		if (pathname === `${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}`) {
			setShowSidebar(true);
		} else {
			setShowSidebar(false);
		}
	}, [pathname]);

	return (
		<WebSocketComponent>
			<S.Container>
				<S.SideBarBox $showSidebar={showSidebar}>
					<Chatbar />
				</S.SideBarBox>
				<S.OutletWrapper $showSidebar={showSidebar}>
					{showSidebar ? (
						<S.BasicContainer>
							<IoChatbubbles size={30} />
							<p>채팅방에 입장해주세요.</p>
						</S.BasicContainer>
					) : (
						<Outlet />
					)}
				</S.OutletWrapper>
			</S.Container>
		</WebSocketComponent>
	);
};

export default ChatMainPage;
