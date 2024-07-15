import * as S from './Tooltip.style';

const Tooltip = ({ text, children, background_color }) => {
	return (
		<S.TooltipWrapper>
			<S.TooltipIcon>
				{children}
				<S.TooltipText background_color={background_color}>
					{text}
				</S.TooltipText>
			</S.TooltipIcon>
		</S.TooltipWrapper>
	);
};

export default Tooltip;
