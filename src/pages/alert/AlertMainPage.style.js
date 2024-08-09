import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants';

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND};
`;

const AlertConatainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 500px;
	width: 75%;
	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		min-width: 0;
		width: 100%;
	}
`;

const TabBarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	height: 12%;
	padding: 60px 30px 10px 30px;
	overflow-x: auto;
	white-space: nowrap;
	border-bottom: 1px solid ${theme.COLOR.GRAY.GRAY_200};

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		padding: 60px 20px 10px 20px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 60px 14px 10px 14px;
	}
`;

const TabBarMenu = styled.div`
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	font-size: ${FONT_SIZE.LG};
	&::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 100%;
		border-bottom: ${({ $isActive }) =>
			$isActive ? '3px solid black' : 'none'};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.BASE};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.SM};
	}
`;

const NotificationCount = styled.span`
	${theme.ALIGN.COLUMN_CENTER};
	text-align: center;
	background-color: ${theme.COLOR.YELLOW.YELLOW_500};
	color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 50%;
	line-height: 1;
	font-size: ${FONT_SIZE.BASE};
	position: absolute;
	width: 16px;
	height: 16px;
	padding: 2px;
	top: -2px;
	right: -8px;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: 14px;
		height: 14px;
		font-size: ${FONT_SIZE.SM};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 12px;
		height: 12px;
		font-size: ${FONT_SIZE.XS};
		top: -12px;
	}
`;

const ContentContainer = styled.div`
	height: 88%;
	padding: 20px 40px;
	overflow-y: auto;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		padding: 10px 20px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 0 10px;
	}
`;

const SideContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 25%;
	min-width: 300px;
	background-color: rgba(250, 250, 250, 1);
	padding: 80px 50px 0px 50px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	> div {
		max-height: 500px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		display: none;
	}
`;

export {
	MainContainer,
	AlertConatainer,
	SideContainer,
	TabBarContainer,
	NotificationCount,
	ContentContainer,
	TabBarMenu,
};
