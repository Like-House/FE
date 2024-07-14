import React from 'react';
import Alert from '../../components/common/alert/alert';
import useModal from '../../hooks/useModal';

const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = () => {
    console.log('Confirmed!');
    closeModal();
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Show Modal</button>
      <Alert
        isOpen={isOpen}
        message='정말 탈퇴하시겠습니까?'
        detailMessage='정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?정말 탈퇴하시겠습니까?'
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        size='large'
      />
    </div>
  );
};

export default Home;
