import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	width: 350px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

	@media ${theme.WINDOW_SIZE.PC} {
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	position: relative;
	${theme.ALIGN.COLUMN_CENTER};

	@media ${theme.WINDOW_SIZE.PC} {
		width: 70%;
	}
`;

const CreateBox = styled.div`
	position: absolute;
	top: 90px;
	display: ${props => (props.$open ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	padding: 0 10px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border: 0.5px solid ${theme.COLOR.GRAY.GRAY_350};
	border-radius: 6px;
	width: 295px;
	height: 120px;
	box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
	li {
		font-size: ${FONT_SIZE.SM};
		padding: 10px;
		cursor: pointer;
		&:hover {
			background-color: ${theme.COLOR.GRAY.GRAY_50};
		}
	}

	@media ${theme.WINDOW_SIZE.PC} {
		width: 100%;
	}
`;

const Button = styled.button`
	margin-top: 30px;
	background-color: ${theme.COLOR.MAIN.YELLOW};
	width: 300px;
	height: 55px;
	border: none;
	font-weight: bold;
	border-radius: 10px;
	${theme.ALIGN.ROW_CENTER};
	color: ${theme.COLOR.COMMON.BLACK};

	p {
		margin-right: 5px;
		font-size: ${FONT_SIZE.SM};
	}
	&:hover {
		cursor: pointer;
	}

	@media ${theme.WINDOW_SIZE.PC} {
		width: 100%;
	}
`;

const Search = styled.div`
	${theme.ALIGN.ROW_CENTER};
	margin-top: 25px;
	margin-bottom: 10px;
	width: 300px;
	height: 50px;
	background: ${theme.COLOR.GRAY.GRAY_0};
	border: none;
	border-radius: 60px;
	input {
		margin-right: 5px;
		width: 75%;
		height: 60%;
		border: none;
		background: ${theme.COLOR.GRAY.GRAY_0};
		&:focus {
			outline: none;
		}
		&::placeholder {
			color: ${theme.COLOR.GRAY.GRAY_350};
		}
	}

	@media ${theme.WINDOW_SIZE.PC} {
		display: none;
	}
`;

const HeaderContaienr = styled.div`
	${theme.ALIGN.ROW_CENTER};
	h1 {
		display: none;
	}
	@media ${theme.WINDOW_SIZE.PC} {
		width: 100%;
		padding-right: 50px;
		margin-bottom: 40px;
		h1 {
			display: block;
			width: 80px;
			margin-top: 30px;
			${theme.ALIGN.ROW_CENTER};
			font-size: ${FONT_SIZE.TWO_XL};
		}
	}
	@media ${theme.WINDOW_SIZE.MOBILE} {
		h1 {
			font-size: ${FONT_SIZE.XL};
		}
	}
`;

export {
	Container,
	ButtonContainer,
	CreateBox,
	Button,
	Search,
	HeaderContaienr,
};
