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
	height: 88%;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
`;

const TextWrapper = styled.div`
	padding: 50px 100px;
	margin-bottom: 5px;

	h2 {
		font-weight: bold;
		margin-bottom: 5px;
	}

	p {
		font-size: ${FONT_SIZE.SM};
	}
`;

const LoginFormContainer = styled.form`
	width: 100%;
	${theme.ALIGN.COLUMN_CENTER};

	span {
		margin-top: 10px;
		color: ${theme.COLOR.GRAY.GRAY_350};
		font-size: ${FONT_SIZE.SM};
	}

	a {
		margin-left: 5px;
		color: ${theme.COLOR.GRAY.GRAY_950};
		font-weight: bold;
		text-decoration: underline;
		font-size: ${FONT_SIZE.SM};

		&:hover {
			color: ${theme.COLOR.YELLOW.YELLOW_500};
		}
	}
`;

const InputWrapper = styled.div`
	width: 470px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 20px;

	label {
		font-size: ${FONT_SIZE.SM};
		color: ${theme.COLOR.GRAY.GRAY_950};
	}
`;

const Line = styled.div`
	width: 100%;
	margin: 60px 0 30px;
	${theme.ALIGN.ROW_CENTER};
	color: ${theme.COLOR.GRAY.GRAY_350};

	hr {
		margin: 0 20px;
		width: 40%;
		height: 1px;
		border: 0;
		background: ${theme.COLOR.GRAY.GRAY_100};
	}
`;

const IconWrapper = styled.div`
	${theme.ALIGN.ROW_CENTER};
	margin: 10px 0 30px;
`;

export {
	Container,
	LoginContainer,
	TextWrapper,
	LoginFormContainer,
	InputWrapper,
	Line,
	IconWrapper,
};
