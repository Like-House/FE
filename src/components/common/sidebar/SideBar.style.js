import styled from 'styled-components';
import theme from '../../../theme/theme';

const Container = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff1cc;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
	${theme.ALIGN.ROW_CENTER};
	font-weight: 700;
	font-size: 20px;
	height: 10%;
`;

const NavContainer = styled.nav`
	height: 70%;
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
		font-size: 12px;
	}

	a.post {
		margin-top: 30px;
	}
`;

const Icon = styled.div`
	${theme.ALIGN.ROW_CENTER};
	width: 50px;
	height: 50px;
	background-color: ${theme.COLOR.MAIN.YELLOW};
	border-radius: 18px;
`;

const IconRound = styled(Icon)`
	border-radius: 50%;
	background-color: ${theme.COLOR.YELLOW.YELLOW_500};

	svg {
		color: #fffaf7;
	}
`;

const Profile = styled.div`
	margin-top: 60px;
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
	}
`;

export { Container, Logo, NavContainer, Icon, IconRound, Profile };
