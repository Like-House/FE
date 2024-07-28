import { NavLink } from 'react-router-dom';
import useModalStore from '../../../../store/useModalStore';
import * as S from './MobileNavbar.style';
import { PAGE_PATH } from '../../../../constants';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ModalPortal from '../../portal/Portal';
import { useEffect } from 'react';
import useAuthStore from '../../../../store/useAuthStore';

const MobileNavbar = () => {
	const { navModal, open } = useModalStore(state => state);
	const { isLoggedIn, checkAuth } = useAuthStore(state => state);

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	let content;

	const handleClick = () => {
		open();
	};

	if (isLoggedIn) {
		content = (
			<S.NavContainer>
				<NavLink to={`${PAGE_PATH.SERVICE}`} onClick={handleClick}>
					서비스 이용
				</NavLink>
				<NavLink to={`${PAGE_PATH.HOME}`} onClick={handleClick}>
					가족 공간
				</NavLink>
				<NavLink to={`${PAGE_PATH.EDIT_PROFILE}`} onClick={handleClick}>
					마이 페이지
				</NavLink>
			</S.NavContainer>
		);
	} else {
		content = (
			<S.NavContainer>
				<NavLink to={`${PAGE_PATH.SERVICE}`} onClick={handleClick}>
					서비스 이용
				</NavLink>
				<NavLink to={`${PAGE_PATH.LOGIN}`} onClick={handleClick}>
					로그인
				</NavLink>
				<NavLink to={`${PAGE_PATH.SIGN_UP}`} onClick={handleClick}>
					회원가입
				</NavLink>
				<NavLink to={`${PAGE_PATH.QNA}`} onClick={handleClick}>
					Q/A
				</NavLink>
			</S.NavContainer>
		);
	}

	return (
		<ModalPortal>
			<S.Container $navModal={navModal}>
				{content}
				<IoIosCloseCircleOutline size={25} onClick={handleClick} />
			</S.Container>
		</ModalPortal>
	);
};

export default MobileNavbar;
