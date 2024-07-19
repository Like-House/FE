import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from "react-icons/bs";

import {
  ModalBackground, 
  ModalContainer, 
  ModalHeader, 
  ModalContent,
  ModalFooter,
} from './modal.style';

const PublicPostModal = ({
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
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            <button onClick={closeModal}>
              <BsXCircle />
            </button>
          </ModalHeader>
          <ModalContent>
            {body[step-1]}
          </ModalContent>
          <ModalFooter>
            <button onClick={handleLeftButtonClick}>
              {step > 1 ? leftButton[step - 2] : ''}
            </button>
            <button onClick={handleRightButtonClick}>
              {step < totalSteps ? rightButton[step - 1] : ''}
            </button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
      )};
    </>
  );
};

PublicPostModal.propTypes = {
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

export default PublicPostModal;
