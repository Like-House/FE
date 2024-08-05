import styled from 'styled-components';
import theme from '../../../theme/theme';

const Container = styled.div`
	position: relative;
	flex: 1;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${theme.WINDOW_SIZE.PC} {
		display: ${props => (props.$mobile ? 'flex' : 'none')};
		height: 100%;
		width: 100%;
	}
`;

const InputContainer = styled.div`
	${theme.ALIGN.ROW_SPACE_BETWEEN};
	padding: 0 20px;
	width: 90%;
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
	margin-right: 5px;
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
		font-size: 20px;
		font-weight: 700;
	}

	svg {
		cursor: pointer;
		margin-right: 20px;
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

	@media ${theme.WINDOW_SIZE.PC} {
		display: none;
	}
`;

const SendContainer = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	position: absolute;
	bottom: 0;
	width: 100%;
	margin-bottom: 10px;
`;

const MessageContainer = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	width: 100%;
	height: calc(100% - 120px);
	margin-bottom: 40px;
	padding: 0 20px;
`;

const test = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	margin-bottom: 60px;
	overflow-x: hidden;
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
	SendContainer,
	MessageContainer,
	test,
};
