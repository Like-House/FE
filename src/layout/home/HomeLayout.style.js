import styled from 'styled-components';

import theme from '@/theme/theme';

const HomeContainer = styled.div`
	height: 100dvh;
	width: 100vw;
	display: flex;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: column-reverse;
	}
`;

const OutletContainer = styled.div`
	flex: 1;
	height: 100%;
	overflow-y: scroll;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-bottom: ${({ $noDisplaySidebar }) =>
			$noDisplaySidebar ? '0' : '80px'};
	}
`;

export { HomeContainer, OutletContainer };
