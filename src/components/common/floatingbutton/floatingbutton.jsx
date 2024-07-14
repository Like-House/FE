import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './floatingbutton.style';
import theme from '../../../theme/theme';

const FloatingButton = ({
  icon,
  onClick,
  disabled,
  backgroundColor,
  borderColor,
  hasShadow,
  boxShadowColor,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      hasShadow={hasShadow}
      boxShadowColor={boxShadowColor}
    >
      <img src={icon} alt='icon' />
    </Button>
  );
};

FloatingButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  hasShadow: PropTypes.bool,
  boxShadowColor: PropTypes.string,
};

FloatingButton.defaultProps = {
  disabled: false,
  backgroundColor: theme.COLOR.MAIN.YELLOW,
  borderColor: theme.COLOR.MAIN.YELLOW,
  hasShadow: true,
  boxShadowColor: 'rgba(0, 0, 0, 0.2)',
};

export default FloatingButton;
