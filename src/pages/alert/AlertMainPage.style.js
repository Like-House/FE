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
	width: 75%;
`;

const TabBarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	height: 12%;
	padding: 60px 100px 10px 100px;
	overflow-x: auto;
	white-space: nowrap;
	border-bottom: 1px solid ${theme.COLOR.GRAY.GRAY_200};
	gap: 100px;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		gap: 40px;
		padding: 60px 20px 10px 20px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		gap: 30px;
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
		top: 2px;
		right: -6px;
	}
`;

const ContentContainer = styled.div`
	height: 88%;
	padding: 20px 40px;
	overflow-y: auto;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 20px 10px;
	}
`;

const SideContainer = styled.div`
	width: 25%;
	background-color: rgba(0, 0, 0, 0.05);
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
