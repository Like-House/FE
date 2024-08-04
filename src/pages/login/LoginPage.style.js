import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants/size';

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 700px;
	${theme.ALIGN.COLUMN_CENTER};
`;

const LoginContainer = styled.div`
	background-color: ${theme.COLOR.COMMON.WHITE};
	width: 80%;
	height: 88%;
	min-height: 650px;
	max-height: 700px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
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
		padding: 50px;
	}
`;

export { Container, LoginContainer, TextWrapper };
