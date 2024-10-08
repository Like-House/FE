import styled, { css } from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '@/constants';

const getSize = size => {
	switch (size) {
		case 'XS':
			return '250px';
		case 'SM':
			return '400px';
		case 'LG':
			return '750px';
		case 'XL':
			return '900px';
		default: // BASE(default)
			return '600px';
	}
};

const widthSize = {
	XS: css`
		width: 250px;
	`,
	SM: css`
		width: 400px;
	`,
	BASE: css`
		width: 600px;
	`,
	LG: css`
		width: 750px;
	`,
	XL: css`
		width: 900px;
	`,
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const InputContainer = styled.div`
	width: ${props => getSize(props.$size)};
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	border-bottom: ${props =>
		props.$noBorder ? 'none' : `1px solid ${theme.COLOR.GRAY.GRAY_300}`};

	${props =>
		props.$filled &&
		`
         border: none;
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
		props.$filled &&
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
		props.$filled &&
		`
      border: 1px solid ${theme.COLOR.COMMON.RED};
    `}
  ${props =>
		props.$disabled &&
		`
      border-bottom: 1px solid ${theme.COLOR.GRAY.GRAY_300};
    `}

  ${props =>
		props.$disabled &&
		props.$filled &&
		`
      border: none;
      background-color: ${theme.COLOR.GRAY.GRAY_50};
    `}

	 svg {
		cursor: pointer;
	}

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		${widthSize['SM']}
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		${widthSize['XS']}
	}
`;

const Input = styled.input`
	width: 97%;
	border: none;
	background-color: transparent;

	&::placeholder {
		color: ${theme.COLOR.GRAY.GRAY_300};
		font-weight: 250;
		${props => props.disabled && `color: ${theme.COLOR.GRAY.GRAY_200};`}
	}

	&:focus {
		outline: none;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const MsgWrapper = styled.p`
	font-size: ${FONT_SIZE.XS};
	color: ${props =>
		props.$errors ? theme.COLOR.COMMON.RED : theme.COLOR.COMMON.BLUE};
`;

export { Container, InputContainer, Input, MsgWrapper };
