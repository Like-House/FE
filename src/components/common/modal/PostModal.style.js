import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);

	${theme.ALIGN.ROW_CENTER};
	z-index: 999;
`;

export const ModalContainer = styled.div`
	width: 600px;
	height: 350px;

	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 30px;
	padding: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

	display: flex;
	flex-direction: column;
	z-index: 1000;
`;

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;

	button {
		background: none;
		border: none;
		font-size: ${FONT_SIZE.LG};
		cursor: pointer;
	}
`;

export const ModalContent = styled.div`
	flex: 1;
	${theme.ALIGN.COLUMN_CENTER};
	border-bottom: 1px solid #ccc;

	textarea {
		width: 90%;
		height: 200px;
		padding: 10px;
		border-radius: 10px;
		border: none;
		resize: none;
		outline: none;
	}
`;

export const ModalFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;

	margin: 8px 15px;
	padding-top: 5px;

	button {
		width: 80px;
		height: 30px;
		border-radius: 7px;
		${theme.ALIGN.ROW_CENTER};

		background-color: ${theme.COLOR.YELLOW.YELLOW_300};
		font-size: ${FONT_SIZE.SM};

		cursor: pointer;
	}
`;
