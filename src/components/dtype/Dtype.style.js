import theme from '@/theme/theme';
import { styled } from 'styled-components';

const Container = styled.div`
	${theme.ALIGN.ROW_CENTER};
	padding: 0 35px 0 20px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		svg {
			width: 20px;
			height: 20px;
		}

		.icon {
			width: 15px;
			height: 15px;
		}
	}
`;

export { Container };
