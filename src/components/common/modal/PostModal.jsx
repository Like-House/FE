import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from "react-icons/bs";
import * as S from "./PostModal.style";

const PostModal = ({
  isOpen,
  closeModal,
  body,
  leftButton,
  leftButtonAction,
  rightButton,
  rightButtonAction,
  totalSteps,
  currentStep,
}) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const handleLeftButtonClick = () => {
    if (step > 1) {
      setStep(step - 1);
      leftButtonAction();
    }
  };

  const handleRightButtonClick = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      rightButtonAction();
    } else {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
      <S.ModalBackground>
        <S.ModalContainer>
          <S.ModalHeader>
            <button onClick={closeModal}>
              <BsXCircle />
            </button>
          </S.ModalHeader>
          <S.ModalContent>
            {body[step-1]}
          </S.ModalContent>
          <S.ModalFooter>
            <button onClick={handleLeftButtonClick}>
              {step > 0 ? leftButton[step - 1] : ''}
            </button>
            <button onClick={handleRightButtonClick}>
              {step < totalSteps + 1 ? rightButton[step - 1] : ''}
            </button>
          </S.ModalFooter>
        </S.ModalContainer>
      </S.ModalBackground>
      )}
    </>
  );
};

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  body: PropTypes.arrayOf(PropTypes.node).isRequired,
  leftButton: PropTypes.arrayOf(PropTypes.string).isRequired,
  leftButtonAction: PropTypes.func.isRequired,
  rightButton: PropTypes.arrayOf(PropTypes.string).isRequired,
  rightButtonAction: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number,
};

export default PostModal;
