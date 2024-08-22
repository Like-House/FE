import styled from 'styled-components';

import theme from '@/theme/theme';

const Container = styled.div`
	position: fixed;
	top: 0;
	right: ${props => (props.$navModal ? '0' : '-100%')};
	transition: all 850ms ease-in-out;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.COMMON.BLACK};
	opacity: 0.9;

	svg {
		color: ${theme.COLOR.COMMON.WHITE};
		position: absolute;
		top: 30px;
		right: 40px;

		&:hover {
			cursor: pointer;
			color: ${theme.COLOR.MAIN.YELLOW};
		}
	}
`;

const NavContainer = styled.nav`
	width: 100%;
	height: 100%;
	${theme.ALIGN.COLUMN_CENTER};

	a {
		${theme.ALIGN.ROW_CENTER};
		color: ${theme.COLOR.COMMON.WHITE};
		text-decoration: none;
		height: 18%;
		width: 100%;

		&.active {
			color: ${theme.COLOR.MAIN.YELLOW};
		}

		&:hover {
			cursor: pointer;
			background-color: ${theme.COLOR.BACKGROUND.WHITE};
			opacity: 0.8;
			color: ${theme.COLOR.COMMON.BLACK};
		}
	}
`;

export { Container, NavContainer };
