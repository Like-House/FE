import styled from 'styled-components';
import theme from '../../../theme/theme';

const Button = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: ${props => props.$width};
	height: ${props => props.$height};
	color: ${theme.COLOR.COMMON.BLACK};
	border-radius: 10px;

	background-color: ${props =>
		props.$btnType === 'primary'
			? theme.COLOR.MAIN.YELLOW
			: props.$btnType === 'secondary'
				? theme.COLOR.YELLOW.YELLOW_200
				: 'transparent'};

	border: ${props =>
		props.$btnType === 'outline' ? `2px solid ${props.$outlineColor}` : 'none'};
	cursor: pointer;

	${props =>
		props.disabled
			? props.$btnType === 'primary' || props.$btnType === 'secondary'
				? `
        background-color: ${theme.COLOR.GRAY.GRAY_100};
        color: ${theme.COLOR.GRAY.GRAY_400};
      `
				: props.$btnType === 'outline'
					? `
          border: 2px solid ${theme.COLOR.GRAY.GRAY_100};
          color: ${theme.COLOR.GRAY.GRAY_400};
        `
					: props.$btnType === 'non line'
						? `color: ${theme.COLOR.GRAY.GRAY_400};`
						: ''
			: ''}

	&:hover {
		transform: scale(0.99);
	}

	&:disabled {
		cursor: not-allowed;
		transform: scale(1);
	}
`;

export { Button };
