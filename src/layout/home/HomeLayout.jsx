import { Outlet } from 'react-router-dom';
import * as S from './HomeLayout.style';

const HomeLayout = () => {
	return (
		<S.HomeContainer>
			<Outlet />
		</S.HomeContainer>
	);
};

export default HomeLayout;
