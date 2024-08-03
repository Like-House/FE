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
		position: fixed;
		bottom: 0;
		background-color: ${theme.COLOR.COMMON.WHITE};
		flex-direction: row;
		box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.25);
		width: 100%;
		height: 80px;
	}
`;

const Logo = styled.img`
	${theme.ALIGN.ROW_CENTER};
	width: 140px;
	height: 9%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const NavContainer = styled.nav`
	height: 520px;
	display: flex;
	flex-direction: column;
	margin-top: 6px;

	a {
		${theme.ALIGN.COLUMN_CENTER};
		margin-bottom: 17px;
		&.active {
			div {
				border: 3px solid #ffc933;
			}
		}

		@media ${theme.WINDOW_SIZE.MOBILE} {
			margin-bottom: 0;
		}
	}

	p {
		margin-top: 5px;
		color: ${theme.COLOR.COMMON.BLACK};
		font-size: ${FONT_SIZE.XS};
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		padding: 0 10px;
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
`;

const ButtonBox = styled.div`
	position: relative;
	${theme.ALIGN.COLUMN_CENTER};
	flex: 1;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const PostIcon = styled.div`
	position: absolute;
	top: 15px;

	span {
		left: 37px;
	}
`;

const PC = styled.div`
	a {
		margin-bottom: 17px;
	}
	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const Mobile = styled.div`
	display: none;

	img {
		width: 17px;
		height: 17px;
	}
	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: flex;
	}
`;
export {
	Container,
	Logo,
	NavContainer,
	Icon,
	Profile,
	ButtonBox,
	PostIcon,
	PC,
	Mobile,
};
