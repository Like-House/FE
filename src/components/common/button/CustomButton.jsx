import * as S from './CustomButton.style';

const CustomButton = ({
  btnType,
  type,
  onClick,
  disabled,
  label,
  icon,
  outlineColor,
  width,
  height,
}) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      $btnType={btnType}
      $outlineColor={outlineColor}
      $width={width}
      $height={height}
    >
      {label}
      {icon}
    </S.Button>
  );
};

export default CustomButton;
