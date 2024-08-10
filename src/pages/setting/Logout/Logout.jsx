import { useState } from 'react';
import * as S from './Logout.style';
import Alert from '../../../components/common/alert/alert';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants';
import useLogout from '../../../hooks/queries/user/useLogout';

export default function Logout() {
	const [isOpen, setIsOpen] = useState(true);
	const [isLoggedOut, setIsLoggedOut] = useState(false);
	const nav = useNavigate();
	const { mutate } = useLogout();
	const token = localStorage.getItem('accessToken');

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleConfirm = () => {
		setIsOpen(false);
		setIsLoggedOut(true);
		mutate(token);
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
