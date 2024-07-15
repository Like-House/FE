import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	border-bottom: 1px solid ${theme.COLOR.GRAY.GRAY_300};

	${props =>
		props.$fiiled &&
		`
         border : none;
         background-color: ${theme.COLOR.BACKGROUND.WHITE};
         border-radius: 7px;
         padding: 0 10px;
   `}

	${props =>
		props.$success &&
		`
         border-bottom : 1px solid ${theme.COLOR.COMMON.BLUE};
		`}
	
	${props =>
		props.$success &&
		props.$fiiled &&
		`
         border : 1px solid ${theme.COLOR.COMMON.BLUE};
		`}

	${props =>
		props.$errors &&
		`
         border-bottom  : 1px solid ${theme.COLOR.COMMON.RED};
		`}

	${props =>
		props.$errors &&
		props.$fiiled &&
		`
         border : 1px solid ${theme.COLOR.COMMON.RED};
		`}
	${props =>
		props.$disabled &&
		`
				border-bottom  : 1px solid ${theme.COLOR.GRAY.GRAY_300};
      `}

	${props =>
		props.$disabled &&
		props.$fiiled &&
		`
				border: none;
				background-color : #F1F2F3;
      `}
`;

const Input = styled.input`
	width: ${props => props.$width};
	height: ${props => props.$height};
	border: none;
	background-color: transparent;

	&::placeholder {
		color: ${theme.COLOR.GRAY.GRAY_300};
		font-weight: 250;
		${props => props.disabled && `color : ${theme.COLOR.GRAY.GRAY_200};`}
	}

	&:focus {
		outline: none;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const MsgWrapper = styled.p`
	margin: 0 11px;
	font-size: ${FONT_SIZE.XS};
	color: ${props =>
		props.$errors ? theme.COLOR.COMMON.RED : theme.COLOR.COMMON.BLUE};
`;

export { Container, InputContainer, Input, MsgWrapper };
