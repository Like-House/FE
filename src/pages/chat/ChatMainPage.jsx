import { Outlet, useLocation } from 'react-router-dom';
import * as S from './ChatMainPage.style';
import { Chatbar } from '../../components';
import { useEffect, useState } from 'react';
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
