import { Outlet, useLocation } from 'react-router-dom';
import * as S from './ChatMainPage.style';
import { Chatbar } from '../../components';
import { useEffect, useRef, useState } from 'react';
import { PAGE_PATH } from '../../constants';

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

	// 웹소켓 해볼려햇음
	const [messages, setMessages] = useState([]);
	const webSocket = useRef(null);
	const token = localStorage.getItem('accessToken');

	useEffect(() => {
		webSocket.current = new WebSocket(
			`ws://likehouse-dev-env.eba-pnp4iu5a.ap-northeast-2.elasticbeanstalk.com/chat?token=${token}`,
		);
		webSocket.current.onopen = () => {
			console.log('WebSocket 연결!');
		};
		webSocket.current.onclose = error => {
			console.log(error);
		};
		webSocket.current.onerror = error => {
			console.log(error);
		};
		webSocket.current.onmessage = event => {
			setMessages(prev => [...prev, event.data]);
		};

		return () => {
			webSocket.current?.close();
		};
	}, []);

	return (
		<S.Container>
			<S.SideBarBox $showSidebar={showSidebar}>
				<Chatbar />
			</S.SideBarBox>
			<S.OutletWrapper $showSidebar={showSidebar}>
				<Outlet />
			</S.OutletWrapper>
		</S.Container>
	);
};

export default ChatMainPage;
