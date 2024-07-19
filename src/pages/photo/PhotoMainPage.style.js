import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants/size';

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND};
`;

const SideContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 25%;
	height: 100%;
	padding: 0 40px;
	border-right: 8px solid #f6f6f6;
`;

const AlbumContainer = styled.div`
	width: 75%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	justify-content: flex-start;
	grid-gap: 28px 32px;
	overflow-y: auto;
	padding: 20px 80px;
`;

const Title = styled.div`
	margin-top: 40px;
	font-size: ${FONT_SIZE.LG};
`;

const CalendarContainer = styled.div`
	width: 100%;
	height: 300px;
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
`;

const DropdownLabel = styled.div`
	margin-top: 40px;
`;

const PictureArea = styled.div`
	position: relative;
	color: white;
	box-sizing: border-box;
	border-radius: 12px;
	aspect-ratio: 7/5;
`;

const Picture = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	object-fit: cover;
`;

export {
	MainContainer,
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
