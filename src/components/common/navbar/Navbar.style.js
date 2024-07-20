import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	width: 100%;
	height: 75px;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
`;

const Logo = styled.h1`
	font-weight: bold;
	color: ${theme.COLOR.MAIN.YELLOW};
	font-size: ${FONT_SIZE.TWO_XL};
`;
const NavContainer = styled.nav`
	${theme.ALIGN.ROW_CENTER};
	a {
		font-size: ${FONT_SIZE.SM};
		color: ${theme.COLOR.COMMON.BLACK};
		margin: 0 13px;

		&.active {
			font-weight: bold;
		}

		p {
			${theme.ALIGN.ROW_CENTER};
			img {
				margin-right: 20px;
				cursor: pointer;
			}
		}
	}
`;

export { Container, Logo, NavContainer };
