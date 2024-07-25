import { RESPONSIVE_SIZE } from '../constants';

/**
 * 반응형 디자인 (MOBILE, TABLET, PC)
 */
const WINDOW_SIZE = {
	MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
	TABLET: `screen and (max-width: ${RESPONSIVE_SIZE.TABLET})`,
	PC: `screen and (max-width: ${RESPONSIVE_SIZE.PC})`,
};

/**
 * 정렬 사용방법
 * ROW_CENTER: 가로 정렬
 * COLUMN_CENTER: 세로 정렬
 */
const ALIGN = {
	// FLEX
	ROW_CENTER: `
    display: flex;
    justify-content: center;
    align-items: center;
    `,
	COLUMN_CENTER: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const COLOR = {
	COMMON: {
		WHITE: '#FFFFFF',
		BLACK: '#000000',
		BLUE: '#2A71DD',
		RED: '#FF000F',
	},
	GRAY: {
		GRAY_50: '#F1F2F3',
		GRAY_100: '#E6E6E6',
		GRAY_200: '#CCCCCC',
		GRAY_300: '#B3B3B3',
		GRAY_350: '#B4B4B4',
		GRAY_400: '#999999',
		GRAY_450: '#838383',
		GRAY_500: '#808080',
		GRAY_550: '#72787F',
		GRAY_600: '#666666',
		GRAY_700: '#4D4D4D',
		GRAY_800: '#333333',
		GRAY_900: '#1A1A1A',
		GRAY_950: '#2A2A2A',
		GRAY_1000: '#0D0D0D',
	},
	MAIN: {
		YELLOW: '#FFE793',
	},
	YELLOW: {
		YELLOW_100: '#FFF8E5',
		YELLOW_200: '#FFF1CC',
		YELLOW_300: '#FFE499',
		YELLOW_400: '#FFD666',
		YELLOW_500: '#FFC933',
		YELLOW_600: '#FFBB00',
		YELLOW_700: '#CC9600',
		YELLOW_800: '#997000',
		YELLOW_900: '#664B00',
		YELLOW_1000: '#332500',
	},
	BACKGROUND: {
		WHITE: '#FAFAFA',
	},
};

const theme = { WINDOW_SIZE, ALIGN, COLOR };

export default theme;
