import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	width: 100%;
	height: 75px;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};

	@media ${theme.WINDOW_SIZE.MOBILE} {
		border: 1px solid ${theme.COLOR.GRAY.GRAY_350};
		padding: 0 15px;
		background-color: ${theme.COLOR.COMMON.WHITE};
	}
`;

const Logo = styled.img`
	width: 150px;
	cursor: pointer;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
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

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100%;
		a {
			font-size: ${FONT_SIZE.BASE};
			margin: 0 17px;
		}
	}
`;

export { Container, Logo, NavContainer };
