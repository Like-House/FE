import * as S from './Tooltip.style';

const Tooltip = ({ text, children, backgroundColor }) => {
	return (
		<S.TooltipWrapper>
			<S.TooltipIcon>
				{children}
				<S.TooltipText backgroundColor={backgroundColor}>{text}</S.TooltipText>
			</S.TooltipIcon>
		</S.TooltipWrapper>
	);
};

export default Tooltip;
