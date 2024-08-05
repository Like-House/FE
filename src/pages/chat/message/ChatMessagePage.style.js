import styled from 'styled-components';
import theme from '../../../theme/theme';

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: red;
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
export { Container, NavContainer, UserContainer };
