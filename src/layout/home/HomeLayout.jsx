import { Outlet, useLocation } from 'react-router-dom';
import * as S from './HomeLayout.style';
import { Sidebar, Settingbar } from '../../components/index';
import { useEffect, useState } from 'react';
import { PAGE_PATH } from '../../constants';

const HomeLayout = () => {
	const { pathname } = useLocation();
	const [isSetting, setIsSetting] = useState(false);
	const noDisplaySidebar = pathname.startsWith(
		`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.CHAT_MESSAGE}`,
	);

	useEffect(() => {
		if (pathname.startsWith(`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}`)) {
			setIsSetting(true);
		} else setIsSetting(false);
	}, [pathname]);

	return (
		<S.HomeContainer>
			<Sidebar />
			<Settingbar isopen={isSetting} />
			<S.OutletContainer $noDisplaySidebar={noDisplaySidebar}>
				<Outlet />
			</S.OutletContainer>
		</S.HomeContainer>
	);
};

export default HomeLayout;
