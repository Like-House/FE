import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants';

const Container = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	padding: 10px;
	font-size: ${FONT_SIZE.XS};
	color: ${theme.COLOR.GRAY.GRAY_550};

	img {
		width: 40px;
		height: 40px;
		cursor: pointer;
		margin-bottom: 10px;
		&:hover {
			opacity: 0.9;
			transform: scale(0.98);
		}
	}
`;

export { Container };
