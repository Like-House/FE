import styled from 'styled-components';
import theme from '../../theme/theme';

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

export { Container, OutletWrapper, SideBarBox };
