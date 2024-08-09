import React, { useState } from 'react';
import Alert from '../../../components/common/alert/alert';

export default function DeleteAccount() {
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(true);
  const [isAccountDeleted, setAccountDeleted] = useState(false);

  const handleDeleteAlertClose = () => {
    setDeleteAlertOpen(false);
  };

  const handleDeleteConfirm = () => {
    setDeleteAlertOpen(false);
    setAccountDeleted(true);
  };

  const handleAccountDeletedConfirm = () => {
    setAccountDeleted(false);
  };

  return (
    <>
      <Alert
        isOpen={isDeleteAlertOpen}
        message='정말 탈퇴하시겠습니까?'
        detailMessage={
          '이 계정을 탈퇴하면 기존에 생성된 가족 공간은 자동으로 삭제되며\n초대된 가족들은 자동적으로 해당 가족 공간에서 탈퇴처리 됩니다.\n한 번 삭제된 가족 공간은 복구가 불가능합니다.'
        }
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteAlertClose}
      />
      <Alert
        isOpen={isAccountDeleted}
        message='탈퇴되었습니다.'
        onConfirm={handleAccountDeletedConfirm}
      />
    </>
  );
}
