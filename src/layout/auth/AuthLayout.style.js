import styled from 'styled-components';

import theme from '@/theme/theme';

const AuthContainer = styled.div`
	height: 100dvh;
	width: 100vw;
	${theme.ALIGN.COLUMN_CENTER};
`;

const OutletContainer = styled.div`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
	overflow-x: hidden;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: ${theme.COLOR.COMMON.WHITE};
	}
`;

export { AuthContainer, OutletContainer };
