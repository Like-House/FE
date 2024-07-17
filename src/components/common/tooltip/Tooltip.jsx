import * as S from './Tooltip.style';

const Tooltip = ({
	text,
	children,
	size,
	backgroundColor,
	position = 'bottom',
}) => {
	return (
		<S.TooltipWrapper>
			<S.TooltipIcon>
				{children}
				<S.TooltipText size={size} backgroundColor={backgroundColor} position={position}>
					{text}
				</S.TooltipText>
			</S.TooltipIcon>
		</S.TooltipWrapper>
	);
};

export default Tooltip;
