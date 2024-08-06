import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	position: relative;
	flex: 1;
	${theme.ALIGN.COLUMN_SPACE_BETWEEN};
	height: 100dvh;
`;

const InputContainer = styled.div`
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
`;

const IconWrapper = styled.div`
	${theme.ALIGN.ROW_CENTER};
	svg {
		margin-left: 15px;
		margin-right: 0;
		color: ${theme.COLOR.GRAY.GRAY_700};
		cursor: pointer;
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
	${theme.ALIGN.COLUMN_CENTER};
	width: 100%;
	height: 50%;
	padding-bottom: 10px;
	padding: 0 20px;
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
};
