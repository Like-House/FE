import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

export const PopOverContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.COLOR.COMMON.WHITE};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding: 15px 25px;
	width: 230px;
	gap: 15px;
`;

export const PopOverContent = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;

	p {
		display: flex;
		align-items: center;
		color: ${theme.COLOR.YELLOW.YELLOW_500};
		font-size: ${FONT_SIZE.TWO_XL};
	}

	span {
		padding-top: 3px;
	}
`;
