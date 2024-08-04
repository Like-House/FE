import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	${theme.ALIGN.ROW_CENTER};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	display: ${props => (props.$chatModal ? '' : 'none')};
`;

const Wrapper = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	position: relative;
	z-index: 1000;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 30px;
	width: 600px;
	height: 350px;

	.close {
		position: absolute;
		cursor: pointer;
		top: 30px;
		left: 30px;
	}

	button {
		padding: 0;
		width: 110px;
		height: 40px;
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
`;

const DropdownWrapper = styled.div`
	p {
		font-size: ${FONT_SIZE.SM};
		margin-left: 5px;
		margin-bottom: 10px;
	}
	margin-bottom: 20px;
`;

export { Container, Wrapper, DropdownWrapper };
