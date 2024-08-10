import styled from 'styled-components';

import theme from '@/theme/theme';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

const SideBarBox = styled.div`
	@media ${theme.WINDOW_SIZE.PC} {
		width: 100%;
		display: ${({ $showSidebar }) => ($showSidebar ? 'block' : 'none')};
	}
`;

const OutletWrapper = styled.div`
	flex: 1;
	height: 100%;

	@media ${theme.WINDOW_SIZE.PC} {
		display: ${({ $showSidebar }) => ($showSidebar ? 'none' : 'flex')};
	}
`;

const BasicContainer = styled.div`
	width: 100%;
	height: 100%;
	${theme.ALIGN.COLUMN_CENTER};

	svg {
		color: ${theme.COLOR.YELLOW.YELLOW_500};
		margin-bottom: 10px;
	}

	p {
		letter-spacing: 1px;
	}
`;

export { Container, OutletWrapper, SideBarBox, BasicContainer };
