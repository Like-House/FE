import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const colorOptions = {
  default: css`
    background-color: ${theme.COLOR.YELLOW.YELLOW_1000};
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  //red
  primary: css`
    background-color: ${theme.COLOR.COMMON.RED};
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  //blue
  secondary: css`
    background-color: ${theme.COLOR.COMMON.BLUE};
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  outlined: css`
    background-color: ${theme.COLOR.COMMON.WHITE};
    color: ${theme.COLOR.COMMON.BLACK};
    border: 1px solid ${theme.COLOR.COMMON.BLACK};
  `,
};

const sizeStyles = {
	xs: css`
		width: 60px;
	`,
	sm: css`
		width: 90px;
	`,
	md: css`
		width: 120px;
	`,
	lg: css`
		width: 180px;
	`,
};

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
	visibility: hidden;
	${({ $size }) => sizeStyles[$size] || sizeStyles.md};
	text-align: center;
	border-radius: 6px;
	padding: 7px;
	position: absolute;
	z-index: 1;
	${({ $position }) =>
		$position === 'top'
			? css`
					bottom: 125%;
				`
			: css`
					top: 125%;
				`}
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
	${({ $backgroundColor }) =>
		colorOptions[$backgroundColor] || colorOptions.default};
	font-size: ${FONT_SIZE.XS};
`;

const TooltipIcon = styled.div`
	display: inline-block;
	position: relative;
	&:hover ${TooltipText} {
		visibility: visible;
		opacity: 1;
	}
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export { TooltipWrapper, TooltipText, TooltipIcon };
