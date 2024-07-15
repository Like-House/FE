import styled from 'styled-components';
import theme from '../../../theme/theme';

const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const TooltipText = styled.span`
	visibility: hidden;
	width: 120px;
	background-color: ${({ background_color }) =>
		background_color || theme.COLOR.YELLOW.YELLOW_1000};
	color: ${theme.COLOR.COMMON.WHITE};
	text-align: center;
	border-radius: 6px;
	padding: 7px;
	position: absolute;
	z-index: 1;
	top: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
`;

const TooltipIcon = styled.div`
	display: inline-block;
	position: relative;
	&:hover ${TooltipText} {
		visibility: visible;
		opacity: 1;
	}
`;

export { TooltipWrapper, TooltipText, TooltipIcon };
