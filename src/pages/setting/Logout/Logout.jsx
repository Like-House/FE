import * as S from './Logout.style';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@/components/common/alert/alert';
import useLogout from '@/hooks/queries/user/useLogout';
import { PAGE_PATH } from '@/constants';

export default function Logout() {
	const [isOpen, setIsOpen] = useState(true);
	const [isLoggedOut, setIsLoggedOut] = useState(false);
	const nav = useNavigate();
	const { mutate } = useLogout();

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleConfirm = () => {
		setIsOpen(false);
		mutate();
		setIsLoggedOut(true);
	};

	const handleLoggedOutConfirm = () => {
		setIsLoggedOut(false);
		nav(`${PAGE_PATH.BASE}`);
	};

	return (
		<S.Alert>
			<Alert
				isOpen={isOpen}
				message="로그아웃 하시겠습니까?"
				onConfirm={handleConfirm}
				onCancel={handleClose}
			/>
			<Alert
				isOpen={isLoggedOut}
				message="로그아웃 되었습니다."
				onConfirm={handleLoggedOutConfirm}
			/>
		</S.Alert>
	);
}
