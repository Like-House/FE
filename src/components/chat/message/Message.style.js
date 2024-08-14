import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	position: relative;
	flex: 1;
	${theme.ALIGN.COLUMN_SPACE_BETWEEN};
	height: 100dvh;
`;

const InputContainer = styled.form`
	margin-bottom: 5px;
	${theme.ALIGN.ROW_SPACE_BETWEEN};
	padding: 0 20px;
	width: 93%;
	height: 60px;
	background-color: ${theme.COLOR.GRAY.GRAY_0};
	border-radius: 20px;
	input {
		border: none;
		background-color: inherit;
		width: 78%;
		height: 70%;
		&:focus {
			outline: none;
		}
	}
	svg {
		color: ${theme.COLOR.YELLOW.YELLOW_500};
		cursor: pointer;
		margin-right: 15px;
	}

	button {
		border: none;
		background-color: inherit;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		input {
			margin-left: 10px;
		}
	}
`;

const IconWrapper = styled.div`
	${theme.ALIGN.ROW_CENTER};
	svg {
		margin-left: 15px;
		margin-right: 0;
		color: ${theme.COLOR.GRAY.GRAY_700};
		cursor: pointer;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		svg {
			margin-left: 5px;
		}
	}
`;

const NavContainer = styled.div`
	position: relative;
	${theme.ALIGN.ROW_SPACE_BETWEEN}
	padding: 0 50px;
	width: 100%;
	height: 75px;
	border-bottom: 1px solid #cccccc;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 0 25px;
	}
`;

const NavWrapper = styled.div`
	display: flex;
	align-items: center;

	svg {
		display: none;
	}

	@media ${theme.WINDOW_SIZE.PC} {
		svg {
			margin-right: 20px;
			display: block;
			cursor: pointer;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		svg {
			margin-right: 10px;
		}
	}
`;

const UserContainer = styled.div`
	${theme.ALIGN.ROW_CENTER};

	img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 15px;
	}

	p {
		width: 500px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;

		font-size: 20px;
		font-weight: 700;
	}

	cursor: pointer;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		img {
			width: 38px;
			height: 38px;
			margin-right: 10px;
		}

		p {
			width: 150px;
			font-size: ${FONT_SIZE.SM};
		}
	}
`;

const Menu = styled.div`
	position: relative;

	p {
		cursor: pointer;
		&:hover {
			color: ${theme.COLOR.YELLOW.YELLOW_400};
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		p {
			font-size: ${FONT_SIZE.SM};
		}
	}
`;

const PopoverWrapper = styled.div`
	display: ${({ $open }) => ($open ? '' : 'none')};
	position: absolute;
	top: 30px;
	right: 0;
`;

const NoChatContainer = styled.div`
	${theme.ALIGN.COLUMN_CENTER}
	height: 100vh;
	flex: 1;
	p {
		margin-top: 10px;
	}
`;

const MessageContainer = styled.div`
	flex: 1;
	width: 100%;
	height: 50%;
	overflow-y: auto;
	padding-bottom: 15px;
	padding: 0 20px;
`;

const MyContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 7px 0;
`;

const MyMessage = styled.div`
	background-color: ${theme.COLOR.MAIN.YELLOW};
	max-width: 300px;
	width: fit-content;
	border-radius: 18px;
	padding: 10px 15px;
`;

const Emoticon = styled.div`
	display: ${({ $emoticon }) => ($emoticon ? 'flex' : 'none')};
	flex-direction: column;
	padding: 15px;
	width: 93%;
	height: 200px;
	background-color: ${theme.COLOR.GRAY.GRAY_0};
	border-radius: 20px;
	margin-bottom: 10px;
`;

const EmotionBtn = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: end;

	p {
		padding-right: 10px;
		width: fit-content;
		font-size: ${FONT_SIZE.SM};
		font-weight: bold;
		&:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;

const EmoPopOver = styled.div`
	position: absolute;
	top: 25px;
	right: 10px;
	display: ${({ $emoOpen }) => ($emoOpen ? 'flex' : 'none')};
	z-index: 3;
`;

const EmoticonWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;
	height: 100%;
	overflow-y: auto;
	padding: 10px;
`;

export {
	InputContainer,
	IconWrapper,
	Container,
	NavContainer,
	UserContainer,
	Menu,
	PopoverWrapper,
	NoChatContainer,
	MessageContainer,
	NavWrapper,
	MyMessage,
	MyContainer,
	Emoticon,
	EmotionBtn,
	EmoPopOver,
	EmoticonWrapper,
};
