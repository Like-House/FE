import { Outlet, useLocation } from 'react-router-dom';
import * as S from './HomeLayout.style';
import { Sidebar, Settingbar } from '../../components';
import { useEffect, useState } from 'react';

const HomeLayout = () => {
	const { pathname } = useLocation();
	const [isSetting, setIsSetting] = useState(false);

	useEffect(() => {
		if (pathname.startsWith('/home/setting')) {
			setIsSetting(true);
		} else setIsSetting(false);
	}, [pathname]);

	return (
		<S.HomeContainer>
			<Sidebar />
			<Settingbar isopen={isSetting} />

			<S.OutletContainer>
				<Outlet />
			</S.OutletContainer>
		</S.HomeContainer>
	);
};

export default HomeLayout;
