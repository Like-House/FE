import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckBoxContainer,
  CheckBoxOutline,
  CheckBoxWithLabel,
  CheckBoxWithBackground,
  CheckMark,
  CheckBoxLabel,
  CheckBoxLabelBold,
  CheckBoxLabelNormal,
} from './checkbox.style';
import blackCheck from '../../../assets/images/blackcheck.png';
import whiteCheck from '../../../assets/images/whitecheck.png';

const checkbox = ({ checked, onChange, label, required, type }) => {
  const renderCheckBox = () => {
    switch (type) {
      case 'outline':
        return (
          <CheckBoxOutline>
            {checked && <CheckMark src={blackCheck} alt='check mark' />}
          </CheckBoxOutline>
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
  type: PropTypes.oneOf(['outline', 'withLabel', 'background']).isRequired,
};

checkbox.defaultProps = {
  label: '',
  required: false,
  type: 'background',
};

export default checkbox;
