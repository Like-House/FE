import styled from 'styled-components';
import theme from '../../theme/theme';

const AuthContainer = styled.div`
	height: 100vh;
	width: 100vw;
	${theme.ALIGN.COLUMN_CENTER};
`;

const OutletContainer = styled.div`
	flex: 1;
	width: 100%;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
`;

export { AuthContainer, OutletContainer };
