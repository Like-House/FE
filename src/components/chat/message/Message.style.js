import styled from 'styled-components';
import theme from '../../../theme/theme';

const Container = styled.div`
	flex: 1;
	${theme.ALIGN.COLUMN_SPACE_BETWEEN};
`;

const InputContainer = styled.div`
	${theme.ALIGN.ROW_SPACE_BETWEEN};
	padding: 0 20px;
	width: 90%;
	height: 60px;
	background-color: ${theme.COLOR.GRAY.GRAY_0};
	border-radius: 20px;
	margin-bottom: 30px;
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
`;

export { InputContainer, IconWrapper, Container, NavContainer, UserContainer };
