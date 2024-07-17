import React from 'react';
import PropTypes from 'prop-types';
import * as S from './checkbox.style';
import BlackCheck from '../../../assets/images/blackcheck.png';
import WhiteCheck from '../../../assets/images/whitecheck.png';

const CheckBox = ({ checked, onChange, label, required, type, size }) => {
  const renderCheckBox = () => {
    switch (type) {
      case 'background':
        checkBoxElement = (
          <S.CheckBoxWithBackground checked={checked} size={size}>
            {checked && (
              <S.CheckMark src={WhiteCheck} alt='check mark' size={size} />
            )}
          </S.CheckBoxWithBackground>
        );
        break;
      case 'outline':
      default:
        checkBoxElement = (
          <S.CheckBoxOutline size={size}>
            {checked && (
              <S.CheckMark src={BlackCheck} alt='check mark' size={size} />
            )}
          </S.CheckBoxOutline>
        );
      case 'withLabel':
        return (
          <CheckBoxWithLabel>
            <CheckBoxOutline>
              {checked && <CheckMark src={blackCheck} alt='check mark' />}
            </CheckBoxOutline>
            <CheckBoxLabel hasLabel={required}>
              {required && <CheckBoxLabelBold> [필수] </CheckBoxLabelBold>}
              <CheckBoxLabelNormal hasLabel={required}>
                {label}
              </CheckBoxLabelNormal>
            </CheckBoxLabel>
          </CheckBoxWithLabel>
        );
      case 'background':
      default:
        return (
          <CheckBoxWithBackground checked={checked}>
            {checked && <CheckMark src={whiteCheck} alt='check mark' />}
          </CheckBoxWithBackground>
        );
    }

    return (
      <S.CheckBoxContainer onClick={onChange}>
        {checkBoxElement}
        {label && (
          <S.CheckBoxLabel hasLabel={required} size={size}>
            {required && <S.CheckBoxLabelBold> [필수] </S.CheckBoxLabelBold>}
            <S.CheckBoxLabelNormal hasLabel={required} size={size}>
              {label}
            </S.CheckBoxLabelNormal>
          </S.CheckBoxLabel>
        )}
      </S.CheckBoxContainer>
    );
  };

  return (
    <CheckBoxContainer onClick={onChange}>{renderCheckBox()}</CheckBoxContainer>
  );
};

checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['outline', 'background']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

checkbox.defaultProps = {
  label: '',
  required: false,
  type: 'outline',
  size: 'md',
};

export default checkbox;
