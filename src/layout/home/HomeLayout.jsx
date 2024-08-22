import * as S from './HomeLayout.style';

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Settingbar } from '@/components';

import { PAGE_PATH } from '@/constants';

const HomeLayout = () => {
	const { pathname } = useLocation();
	const [isSetting, setIsSetting] = useState(false);
	const noDisplaySidebar = pathname.startsWith(
		`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}`,
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
