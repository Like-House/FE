import React, { useState } from 'react';
import * as S from './Logout.style';
import Alert from '../../../components/common/alert/alert';

export default function Logout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    setIsLoggedOut(true);
  };

  const handleLoggedOutConfirm = () => {
    setIsLoggedOut(false);
  };

  return (
    <S.Alert>
      <Alert
        isOpen={isOpen}
        message='로그아웃 하시겠습니까?'
        onConfirm={handleConfirm}
        onCancel={handleClose}
      />
      <Alert
        isOpen={isLoggedOut}
        message='로그아웃 되었습니다.'
        onConfirm={handleLoggedOutConfirm}
      />
    </S.Alert>
  );
}
