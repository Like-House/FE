import ModalPortal from '../portal/Portal';
import * as S from './alert.style';

import Exclamationmark from '@/assets/images/Exclamationmark.png';

const Alert = ({
  message,
  detailMessage,
  onConfirm,
  onCancel,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const size = detailMessage ? 'large' : 'small';

  const formatDetailMessage = (message) => {
    return message.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <ModalPortal>
      <S.ModalBackground onClick={onClose}>
        <S.ModalContainer $size={size} onClick={(e) => e.stopPropagation()}>
          <S.Icon>
            <img src={Exclamationmark} alt='exclamation mark' />
          </S.Icon>
          <S.ModalMessage>{message}</S.ModalMessage>
          {detailMessage && (
            <S.ModalDetailMessage>
              {formatDetailMessage(detailMessage)}
            </S.ModalDetailMessage>
          )}
          <S.ButtonContainer
            $singleButton={!onCancel}
            $hasDetailMessage={!!detailMessage}
          >
            <S.Button onClick={onConfirm}>확인</S.Button>
            {onCancel && <S.Button onClick={onCancel}>취소</S.Button>}
          </S.ButtonContainer>
        </S.ModalContainer>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default Alert;
