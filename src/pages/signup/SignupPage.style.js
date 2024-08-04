import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants';

const Container = styled.div`
	width: 100%;
	${theme.ALIGN.COLUMN_CENTER};
	margin-bottom: 100px;
`;

const SignupContainer = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	margin-top: 45px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	width: 80%;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding-bottom: 80px;
`;

const TextWrapper = styled.div`
	width: 100%;
	padding: 80px 0 25px 150px;

	h2 {
		font-weight: bold;
		margin-bottom: 5px;
	}

	p {
		word-break: keep-all;
		font-size: ${FONT_SIZE.SM};
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 50px;
	}
`;

export { Container, SignupContainer, TextWrapper };
