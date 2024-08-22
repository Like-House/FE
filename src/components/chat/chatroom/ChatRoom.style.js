import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	width: 290px;
	height: 75px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 15px;
	margin: 5px 0;
	&:hover {
		cursor: pointer;
		background-color: ${theme.COLOR.COMMON.WHITE};
		border-radius: 15px;
	}

	@media ${theme.WINDOW_SIZE.PC} {
		width: 90%;
	}
`;

const UserContainer = styled.div`
	width: 78%;
	height: 60%;
	font-size: ${FONT_SIZE.SM};
	div {
		display: flex;
		justify-content: space-between;
	}
`;

export { Container, UserContainer };
