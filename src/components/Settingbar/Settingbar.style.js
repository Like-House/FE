import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants/size';

const { COLOR } = theme;

const Container = styled.nav`
	background-color: ${COLOR.BACKGROUND.WHITE};
	padding: 30px;
	width: 250px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	z-index: 2;
`;

const Section = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

const SectionTitle = styled.h2`
	font-size: ${FONT_SIZE.LG};
	color: ${COLOR.GRAY.GRAY_800};
	margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
	display: block;
	margin-top: 10px;
	margin-bottom: 20px;
	color: ${COLOR.GRAY.GRAY_800};
	text-decoration: none;
	font-size: ${FONT_SIZE.BASE};
	padding: 10px 20px;
	width: 100%;
	border-radius: 4px;

	&:hover {
		background-color: ${COLOR.COMMON.WHITE};
	}
`;

export { Container, Section, SectionTitle, StyledLink };
