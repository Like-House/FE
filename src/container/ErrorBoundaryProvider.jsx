import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import * as S from '../layout/auth/AuthLayout.style.js';
import { Footer, Navbar } from '../components/index.js';

export const ErrorBoundaryProvider = ({ children }) => {
	const { reset } = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			onReset={reset}
			fallbackRender={({ error, resetErrorBoundary }) => {
				console.error('Error caught by ErrorBoundary:', error);
				return (
					<S.AuthContainer>
						<Navbar />
						<h1>에러가 발생했다.</h1>
						<S.OutletContainer>
							<div
								style={{
									padding: '40px',
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<strong style={{ marginBottom: '50px' }}>
									{error.message &&
										'서비스 이용 중 에러가 발생했습니다. 이전 페이지로 돌아가주세요.'}
								</strong>
								<button onClick={resetErrorBoundary}>홈으로 돌아가기</button>
							</div>
						</S.OutletContainer>
						<Footer />
					</S.AuthContainer>
				);
			}}
		>
			{children}
		</ErrorBoundary>
	);
};
