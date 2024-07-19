import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const FormContainer = styled.div`
	width: 75%;
	button {
		margin-top: 150px;
	}
`;

const UserNameWrapper = styled.div`
	width: 250px;
`;

const InputWrapper = styled.div`
	width: 100%;
	margin: 50px 0;
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
		width: 170px;
		height: 45px;
		margin-top: 15px;
		word-break: keep-all;

		@media ${theme.WINDOW_SIZE.MOBILE} {
			width: 100px;
			padding: 0 5px;
			font-size: ${FONT_SIZE.XS};
		}
	}
`;

const FileWrapper = styled.div`
	display: flex;
	flex-direction: column;

	label {
		text-align: center;
		word-break: keep-all;
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

		@media ${theme.WINDOW_SIZE.MOBILE} {
			font-size: ${FONT_SIZE.XS};
			margin: 10px 0;
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

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const TextWrapper = styled.div`
	margin-top: 100px;
	width: 100%;

	h2 {
		font-weight: bold;
		margin-bottom: 5px;
	}

	p {
		word-break: keep-all;
		font-size: ${FONT_SIZE.SM};
	}
`;

const TermsContainer = styled.div`
	margin-top: 50px;

	div {
		padding: 5px 0;
	}

	span {
		font-size: ${FONT_SIZE.BASE};
	}

	hr {
		margin: 20px 0;
		border: none;
		height: 1px;
		width: 100%;
		background: ${theme.COLOR.GRAY.GRAY_200};
	}
`;

const CheckBoxWrapper = styled.div`
	span {
		font-size: ${FONT_SIZE.SM};
	}
`;

export {
	UserNameWrapper,
	FormContainer,
	InputWrapper,
	InputWithBtn,
	FileInput,
	FileWrapper,
	File,
	TextWrapper,
	TermsContainer,
	CheckBoxWrapper,
};
