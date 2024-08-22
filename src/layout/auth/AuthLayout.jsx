import * as S from './AuthLayout.style';

import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components';
import { ErrorBoundaryProvider } from '@/container/ErrorBoundaryProvider.jsx';

const AuthLayout = () => {
	return (
		<ErrorBoundaryProvider>
			<S.AuthContainer>
				<Navbar />
				<S.OutletContainer>
					<Outlet />
				</S.OutletContainer>
			</S.AuthContainer>
		</ErrorBoundaryProvider>
	);
};

export default AuthLayout;
