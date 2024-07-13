import { Outlet } from 'react-router-dom';
import * as S from './AuthLayout.style';

const AuthLayout = () => {
	return (
		<S.AuthContainer>
			<Outlet />
		</S.AuthContainer>
	);
};

export default AuthLayout;
