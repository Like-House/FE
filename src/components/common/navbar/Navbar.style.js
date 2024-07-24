import styled from 'styled-components';
import theme from '../../../theme/theme';

const Container = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	width: 100%;
	height: 60px;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};

	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: ${theme.COLOR.GRAY.GRAY_300};
	}
`;

export { Container };
