import styled from 'styled-components';
import theme from '../../theme/theme';
import { RESPONSIVE_SIZE, FONT_SIZE } from '../../constants/size';

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND};
`;

const SideContainer = styled.div`
	display: ${({ show }) => (show ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 25%;
	height: 100%;
	padding: 0 40px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: 100%;
		display: ${({ show }) => (show ? 'flex' : 'none')};
	}
`;

const ToggleButton = styled.button`
	display: none;
	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		display: block;
		height: 30px;
		padding: 10px 20px;
		background-color: ${theme.COLOR.YELLOW.YELLOW_200};
		color: ${theme.COLOR.COMMON.BLACK};
		border: none;
		border-radius: 0 5px 5px 0;
		border-left: 1px solid ${theme.COLOR.YELLOW.YELLOW_300};
		cursor: pointer;
	}
`;

const AlbumContainer = styled.div`
	width: 75%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 28px;
	overflow-y: auto;
	padding: 20px 80px;
	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: 70%;
		padding: 10px 20px;
	}
	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 100%;
		padding: 10px 10px;
	}
`;

const Title = styled.div`
	margin-top: 40px;
	font-size: ${FONT_SIZE.LG};
`;

const CalendarContainer = styled.div`
	width: 100%;
	height: 300px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const CalenderLabel = styled.div`
	margin-top: 40px;
`;

const DropdownWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
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

const DropdownLabel = styled.div`
	margin-top: 40px;
`;

const PictureArea = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	aspect-ratio: 7/5;
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
	SideContainer,
	ToggleButton,
	AlbumContainer,
	Title,
	CalendarContainer,
	CalenderLabel,
	DropdownLabel,
	DropdownWrapper,
	PictureArea,
	Picture,
};
