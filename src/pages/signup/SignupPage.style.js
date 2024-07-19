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

const FormContainer = styled.div`
	width: 75%;
	/* padding: 0px 130px; */
`;

const InputWrapper = styled.div`
	width: 100%;
	margin: 55px 0;
	padding-right: 10px;

	label {
		font-size: ${FONT_SIZE.SM};
		color: ${theme.COLOR.GRAY.GRAY_950};
	}
	div {
		width: 100%;
	}
`;

const InputWithBtn = styled.div`
	display: flex;
	align-items: center;
	height: 61px;
	margin: 50px 0;

	button {
		margin-top: 15px;
	}
`;

const FileWrapper = styled.div`
	display: flex;
	flex-direction: column;

	label {
		${theme.ALIGN.ROW_CENTER};
		cursor: pointer;
		background-color: ${theme.COLOR.MAIN.YELLOW};
		padding: 15px 35px;
		height: 45px;
		border-radius: 10px;
		margin-left: 15px;
		font-size: ${FONT_SIZE.SM};

		&:hover {
			transform: scale(0.99);
		}
	}

	p {
		font-size: ${FONT_SIZE.SM};
		margin-bottom: 20px;
	}
`;

const FileInput = styled.input`
	display: none;
`;

const File = styled.div`
	display: flex;

	div {
		background-color: ${theme.COLOR.GRAY.GRAY_50};
		border-radius: 10px;
		width: 150px;
		height: 150px;
	}

	img {
		border-radius: 10px;
		width: 150px;
		height: 150px;
		object-fit: cover;
	}
`;

export {
	Container,
	SignupContainer,
	TextWrapper,
	FormContainer,
	InputWrapper,
	InputWithBtn,
	FileInput,
	FileWrapper,
	File,
};
