import React, { useState } from "react";
import PropTypes from 'prop-types';
import useCustomModal from "../../../hooks/useCustomModal";
import { BsXCircle } from "react-icons/bs";
import { 
  ModalBackground, 
  ModalContainer, 
  ModalHeader, 
  ModalContent, 
  Textarea, 
  Footer,
} from './modal.style';

const PostModal = ({
  onSubmit,
  LeftButton,
  RightButton,
  select_content
}) => {
  const { isOpen, closeModal } = useCustomModal();
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');

  if(!isOpen) {
    return null;
  }

  const handleBack = () => {
    setStep(1);
  }

  const handleNext = () => {
    setStep(2);
  }

  const handleClose = () => {
    setStep(1);
    setContent('');
    setSelectedFile(null);
    closeModal();
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleSubmit = () => {
    const newPost = {
      content,
      photo: selectedFile ? URL.createObjectURL(selectedFile) : null,
    };
    onSubmit(newPost);
    handleClose();
  };

  return (
    <ModalBackground onClick={handleClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <button onClick={handleClose}><BsXCircle /></button>
        </ModalHeader>
        <ModalContent>
          {step === 1 && (
            <>
              <Textarea
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Footer>
                <input
                  id="file-input"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={ handleFileChange }
                />
                <LeftButton onClick={() => document.getElementById('file-input').click()} />
                <RightButton onClick={handleNext} />
              </Footer>
            </>
          )}
          {step === 2 && (
            <>
              <div>{select_content}</div>
              <Footer>
                <LeftButton onClick={handleBack} />
                <RightButton onClick={handleSubmit} />
              </Footer>
            </>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

PostModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  LeftButton: PropTypes.elementType.isRequired,
  RightButton: PropTypes.elementType.isRequired,
};

export default PostModal;