import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 50px 70px;

	h1 {
		font-weight: 400;
		font-size: ${FONT_SIZE.TWO_XL};
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 50px 30px;
	}
`;

const MemberWrapper = styled.div`
	margin-top: 50px;
`;

export { Container, MemberWrapper };
