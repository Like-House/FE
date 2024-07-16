import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBackground,
  ModalContainer,
  Icon,
  ModalMessage,
  ModalDetailMessage,
  ButtonContainer,
  Button,
} from './alert.style';
import Exclamationmark from '../../../assets/images/Exclamationmark.png';

const Alert = ({ message, detailMessage, onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  const size = detailMessage ? 'large' : 'small';

  return (
    <ModalBackground>
      <ModalContainer size={size}>
        <Icon>
          <img src={Exclamationmark} alt='exclamation mark' />
        </Icon>
        <ModalMessage>{message}</ModalMessage>
        {detailMessage && (
          <ModalDetailMessage>{detailMessage}</ModalDetailMessage>
        )}
        <ButtonContainer singleButton={!onCancel}>
          <Button onClick={onConfirm}>확인</Button>
          {onCancel && <Button onClick={onCancel}>취소</Button>}
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  detailMessage: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

Alert.defaultProps = {
  detailMessage: null,
  onCancel: null,
};

export default Alert;
