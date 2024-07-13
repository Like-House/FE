import { Outlet } from 'react-router-dom';
import * as S from './HomeLayout.style';
import { Sidebar } from '../../components/index.js';

const HomeLayout = () => {
	return (
		<S.HomeContainer>
			<Sidebar />
			<S.OutletContainer>
				<Outlet />
			</S.OutletContainer>
		</S.HomeContainer>
	);
};

export default HomeLayout;
