import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants/size';

const Container = styled.div`
	width: 100%;
	height: 100%;
	${theme.ALIGN.COLUMN_CENTER};
`;

const LoginContainer = styled.div`
	background-color: ${theme.COLOR.COMMON.WHITE};
	width: 80%;
	min-height: 630px;
	height: 88%;

	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		min-height: 0;
		box-shadow: none;
		width: 100%;
	}
`;

const TextWrapper = styled.div`
	padding: 60px 0 60px 120px;
	margin-bottom: 5px;

	h2 {
		font-weight: bold;
		margin-bottom: 5px;
	}

	p {
		font-size: ${FONT_SIZE.SM};
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 5px 50px 50px;
	}
`;

export { Container, LoginContainer, TextWrapper };
