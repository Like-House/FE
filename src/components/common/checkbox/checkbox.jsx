import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckBoxContainer,
  CheckBoxOutline,
  CheckBoxWithBackground,
  CheckMark,
  CheckBoxLabel,
  CheckBoxLabelBold,
  CheckBoxLabelNormal,
} from './checkbox.style';
import BlackCheck from '../../../assets/images/blackcheck.png';
import WhiteCheck from '../../../assets/images/whitecheck.png';

const CheckBox = ({ checked, onChange, label, required, type }) => {
  const renderCheckBox = () => {
    let checkBoxElement;

    switch (type) {
      case 'background':
        checkBoxElement = (
          <CheckBoxWithBackground checked={checked}>
            {checked && <CheckMark src={WhiteCheck} alt='check mark' />}
          </CheckBoxWithBackground>
        );
        break;
      case 'outline':
      default:
        checkBoxElement = (
          <CheckBoxOutline>
            {checked && <CheckMark src={BlackCheck} alt='check mark' />}
          </CheckBoxOutline>
        );
    }

    return (
      <CheckBoxContainer onClick={onChange}>
        {checkBoxElement}
        {label && (
          <CheckBoxLabel hasLabel={required}>
            {required && <CheckBoxLabelBold> [필수] </CheckBoxLabelBold>}
            <CheckBoxLabelNormal hasLabel={required}>
              {label}
            </CheckBoxLabelNormal>
          </CheckBoxLabel>
        )}
      </CheckBoxContainer>
    );
  };

  return renderCheckBox();
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['outline', 'background']),
};

CheckBox.defaultProps = {
  label: '',
  required: false,
  type: 'outline',
};

export default CheckBox;
