import * as S from './floatingbutton.style';
import DefaultIcon from '../../../assets/images/floatingsetting.png';

const FloatingButton = ({
	icon,
	onClick,
	disabled,
	backgroundColor,
	borderColor,
	hasShadow,
	boxShadowColor,
	size,
}) => {
	return (
		<S.Button
			onClick={onClick}
			disabled={disabled}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			hasShadow={hasShadow}
			boxShadowColor={boxShadowColor}
			$size={size}
		>
			{icon ? icon : <img src={DefaultIcon} alt="default icon" />}
		</S.Button>
	);
};

export default FloatingButton;
