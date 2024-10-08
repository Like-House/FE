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
		height: 65px;
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
	button {
		padding: 0;
		padding-top: 3px;
		border: none;
		background-color: inherit;
		font-size: ${FONT_SIZE.SM};
		color: ${theme.COLOR.COMMON.BLACK};
		margin: 0 13px;
		cursor: pointer;
	}

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
			font-size: ${FONT_SIZE.SM};
			margin: 0 10px;

			p {
				img {
					margin-right: 10px;
				}
			}
		}
	}
`;

export { Container, Logo, NavContainer };
