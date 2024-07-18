import React from 'react';
import PropTypes from 'prop-types';
import * as S from './alert.style';
import Exclamationmark from '../../../assets/images/Exclamationmark.png';

const Alert = ({ message, detailMessage, onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  const size = detailMessage ? 'large' : 'small';

  return (
    <S.ModalBackground>
      <S.ModalContainer size={size}>
        <S.Icon>
          <img src={Exclamationmark} alt='exclamation mark' />
        </S.Icon>
        <S.ModalMessage>{message}</S.ModalMessage>
        {detailMessage && (
          <S.ModalDetailMessage>{detailMessage}</S.ModalDetailMessage>
        )}
        <S.ButtonContainer
          singleButton={!onCancel}
          hasDetailMessage={!!detailMessage}
        >
          <S.Button onClick={onConfirm}>확인</S.Button>
          {onCancel && <S.Button onClick={onCancel}>취소</S.Button>}
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBackground>
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