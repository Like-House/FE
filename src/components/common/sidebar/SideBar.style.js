import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${theme.COLOR.YELLOW.YELLOW_200};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	z-index: 99;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: ${theme.COLOR.COMMON.WHITE};
		flex-direction: row;
		box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.25);
		width: 100%;
		height: 100px;
	}
`;

const Logo = styled.div`
	${theme.ALIGN.ROW_CENTER};
	font-weight: 700;
	font-size: ${FONT_SIZE.LG};
	height: 10%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const NavContainer = styled.nav`
	height: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	a {
		${theme.ALIGN.COLUMN_CENTER};

		&.active {
			div {
				border: 3px solid #ffc933;
			}
		}
	}

	p {
		margin-top: 5px;
		color: ${theme.COLOR.COMMON.BLACK};
		font-size: ${FONT_SIZE.XS};
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: row;
		width: 72%;
		margin-left: 5px;
	}
`;

const Icon = styled.div`
	${theme.ALIGN.ROW_CENTER};
	width: 50px;
	height: 50px;
	background-color: ${theme.COLOR.MAIN.YELLOW};
	border-radius: 18px;

	img {
		width: 30px;
		height: 30px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		border-radius: 50%;
		width: 35px;
		height: 35px;

		svg {
			width: 20px;
			height: 20px;
		}

		img {
			width: 25px;
			height: 25px;
		}
	}
`;

const Profile = styled.div`
	position: absolute;
	bottom: 40px;

	img {
		width: 50px;
		height: 50px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		position: static;
		height: 40px;

		img {
			width: 35px;
			height: 35px;
		}
	}
`;

const ButtonBox = styled.div`
	position: relative;
	${theme.ALIGN.COLUMN_CENTER};
	flex: 1;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		position: static;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		margin-right: 8px;
	}
`;

const PostIcon = styled.div`
	position: absolute;
	top: 15px;

	span {
		left: 37px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		position: static;
		button {
			width: 35px;
			height: 35px;
		}

		img {
			width: 19px;
			height: 19px;
		}
	}
`;

export { Container, Logo, NavContainer, Icon, Profile, ButtonBox, PostIcon };
