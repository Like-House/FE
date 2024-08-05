import styled from 'styled-components';
import theme from '../../theme/theme';
import { RESPONSIVE_SIZE, FONT_SIZE } from '../../constants/size';

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND};
	box-sizing: border-box;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		height: auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: auto;
	}
`;

const SideContainerWrapper = styled.div`
	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		overflow-y: visible;
	}
`;

const SideContainer = styled.div`
	width: 450px;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 0 40px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: 260px;
		padding: 0 20px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: none;
	}
`;

const AlbumContainer = styled.div`
	width: calc(100% - 450px);
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 28px;
	overflow-y: auto;
	padding: 20px 60px;
	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: calc(100% - 260px);
		padding: 10px 20px;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-gap: 10px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 100%;
		padding: 10px;
		height: auto;
		overflow: hidden;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-gap: 10px;
		box-sizing: border-box;
	}
`;

const Title = styled.div`
	margin-top: 30px;
	font-size: ${FONT_SIZE.LG};
	font-weight: 700;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.TWO_XL};
	}
`;

const CalenderLabel = styled.div`
	font-size: ${FONT_SIZE.SM};
	margin-top: 30px;
	margin-bottom: 20px;
	align-self: flex-start;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		margin-top: 20px;
	}
`;

const CalendarContainer = styled.div`
	margin-bottom: 18px;
	border-radius: 10px;
	width: 100%;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DropdownLabel = styled.div`
	font-size: ${FONT_SIZE.SM};
	align-self: flex-start;
	margin-bottom: 20px;
`;

const DropdownWrapper = styled.div`
	width: 100%;
	${theme.ALIGN.COLUMN_CENTER};
	& > div {
		width: 100%;
	}
	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		& > div {
			max-width: 300px;
		}
	}
	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		& > div {
			max-width: 100%;
		}
	}
`;

const PictureArea = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	aspect-ratio: 7/5;
	max-width: 400px;
	height: 200px;
`;

const Picture = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 12px;
	aspect-ratio: 7/5;
	cursor: pointer;
`;

export {
	MainContainer,
	SideContainerWrapper,
	SideContainer,
	AlbumContainer,
	Title,
	CalendarContainer,
	CalenderLabel,
	DropdownLabel,
	DropdownWrapper,
	PictureArea,
	Picture,
};
