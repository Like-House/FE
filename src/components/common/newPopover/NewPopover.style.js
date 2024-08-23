import styled, { css } from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const Container = styled.div`
	display: flex;
	position: relative;
	display: flex;
`;

const Wrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
`;

const PopOverContainer = styled.div`
	display: ${({ $showMenu }) => ($showMenu ? 'flex' : 'none')};
	flex-direction: column;
	background-color: ${theme.COLOR.COMMON.WHITE};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding: 15px 25px;
	gap: 15px;

	width: 230px;
	text-align: center;
	position: absolute;
	z-index: 1;
	${({ $position }) =>
		$position === 'top'
			? css`
					bottom: 125%;
					right: 0%;
				`
			: css`
					top: 125%;
					right: 0%;
				`}
`;

const PopOverContent = styled.div`
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

export { Container, Wrapper, PopOverContainer, PopOverContent };
