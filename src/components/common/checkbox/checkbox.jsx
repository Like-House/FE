import * as S from './checkbox.style';
import BlackCheck from '../../../assets/images/blackcheck.png';
import WhiteCheck from '../../../assets/images/whitecheck.png';

const CheckBox = ({ checked, onChange, label, required, type, size }) => {
  const renderCheckBox = () => {
    let checkBoxElement;

    switch (type) {
      case 'background':
        checkBoxElement = (
          <S.CheckBoxWithBackground $checked={checked} $size={size}>
            {checked && (
              <S.CheckMark src={WhiteCheck} alt='check mark' $size={size} />
            )}
          </S.CheckBoxWithBackground>
        );
        break;
      case 'outline':
      default:
        checkBoxElement = (
          <S.CheckBoxOutline $size={size}>
            {checked && (
              <S.CheckMark src={BlackCheck} alt='check mark' $size={size} />
            )}
          </S.CheckBoxOutline>
        );
    }

    return (
      <S.CheckBoxContainer onClick={onChange}>
        {checkBoxElement}
        {label && (
          <S.CheckBoxLabel $hasLabel={required} $size={size}>
            {required && <S.CheckBoxLabelBold> [필수] </S.CheckBoxLabelBold>}
            <S.CheckBoxLabelNormal $hasLabel={required} $size={size}>
              {label}
            </S.CheckBoxLabelNormal>
          </S.CheckBoxLabel>
        )}
      </S.CheckBoxContainer>
    );
  };

  return renderCheckBox();
};

export default CheckBox;
