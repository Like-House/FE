import styled from 'styled-components';
import theme from '../../../../theme/theme';
import { FONT_SIZE } from '../../../../constants';

const Container = styled.div`
	padding-top: 20px;
	${theme.ALIGN.ROW_SPACE_BETWEEN};

	button {
		border: none;
		background-color: inherit;
		font-size: ${FONT_SIZE.SM};
		cursor: pointer;

		&:hover {
			transform: scale(0.95);
		}
	}
`;

export { Container };
