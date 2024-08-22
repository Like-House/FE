import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const getWidth = size => {
	switch (size) {
		case 'XS':
			return '200px';
		case 'SM':
			return '300px';
		case 'LG':
			return '800px';
		default: // BASE(default)
			return '270px';
	}
};

const getHight = size => {
	switch (size) {
		case 'XS':
			return '240px';
		case 'SM':
			return '260px';
		case 'LG':
			return '241px';
		default:
			return '320px';
	}
};

const Container = styled.div`
	width: 100%;
	min-width: 230px;
	max-width: ${props => getWidth(props.$size)};
	border-radius: 10px;
	box-shadow: ${props =>
		props.$hasBackgroundColor
			? ' 0px 4px 10px 0px rgba(0, 0, 0, 0.02)'
			: 'none'};
	background-color: ${props =>
		props.$hasBackgroundColor ? theme.COLOR.COMMON.WHITE : 'transparent'};
	padding: 5px;
`;

const DateHeader = styled.div`
	width: 100%;
	margin-top: 20px;
	${theme.ALIGN.ROW_CENTER};
	padding: ${props =>
		props.$size === 'SM' || props.$size === 'XS' ? '10px' : '20px'};

	svg {
		cursor: pointer;
		&:hover {
			color: ${theme.COLOR.YELLOW.YELLOW_500};
		}
	}

	p {
		margin: 0 40px;
		word-break: keep-all;
		text-align: center;
	}
`;

const CalendarContainer = styled.div`
	width: 100%;
	padding: 15px;
`;

const DayofWeekWrapper = styled.div`
	${theme.ALIGN.ROW_SPACE_BETWEEN};
	margin-bottom: ${props => (props.$size === 'BASE' ? '40px' : '20px')};
	div {
		width: 100%;
		font-size: ${FONT_SIZE.SM};
		text-align: center;
	}
`;

const DayWrapper = styled.div`
	width: 100%;
	height: ${props => getHight(props.$size)};
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: ${props => (props.$size === 'XS' ? '2px' : '4px')};
`;

const Day = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: ${props =>
		props.$size === 'BASE' ? '50px' : props.$size === 'LG' ? '45px' : '40px'};

	opacity: ${props => (props.$isCurrentMonth ? 1 : 0.1)};
	font-size: ${props => (props.$size === 'SM' ? FONT_SIZE.XS : FONT_SIZE.SM)};
	cursor: pointer;

	span {
		color: ${props =>
			props.$isSelected ? theme.COLOR.COMMON.WHITE : theme.COLOR.COMMON.BLACK};
		${theme.ALIGN.ROW_CENTER};
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: ${props =>
			props.$isSelected ? theme.COLOR.YELLOW.YELLOW_500 : 'transparent'};
	}

	.icon {
		height: 10px;
	}
`;

export {
	Container,
	DateHeader,
	CalendarContainer,
	DayofWeekWrapper,
	DayWrapper,
	Day,
};
