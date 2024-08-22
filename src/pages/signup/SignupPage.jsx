import { useRef, useEffect } from 'react';
import * as S from './SignupPage.style';

import { SignupForm } from '@/components';

const SignupPage = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
		}
	}, []);

	return (
		<S.Container ref={containerRef}>
			<S.SignupContainer>
				<S.TextWrapper>
					<h2>회원가입</h2>
					<p>서비스 이용을 위한 회원가입을 진행해주세요.</p>
				</S.TextWrapper>
				<SignupForm />
			</S.SignupContainer>
		</S.Container>
	);
};

export default SignupPage;
