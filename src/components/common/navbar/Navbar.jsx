import { NavLink } from 'react-router-dom';
import * as S from './Navbar.style';
import { PAGE_PATH } from '../../../constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MobileNavbar, Avatar } from '../../';
import useModalStore from '../../../store/useModalStore';

function Navbar() {
	// 경로 수정 필요  & 로그인 유지 로직 변경 예정
	const { open } = useModalStore(state => state);

	const data = {
		img: '/src/assets/images/profile.png',
		username: '정혜원',
	};

	let login = false;
	let content;

	if (login) {
		content = (
			<S.NavContainer>
				<NavLink to={`${PAGE_PATH.SERVICE}`}>서비스 이용</NavLink>
				<NavLink to={`${PAGE_PATH.HOME}`}>가족 공간</NavLink>
				<NavLink
					to={`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}/${PAGE_PATH.EDIT_PROFILE}`}
				>
					<p>
						<Avatar src={data.img} size="sm" />
						{data.username}
					</p>
				</NavLink>
			</S.NavContainer>
		);
	} else {
		content = (
			<S.NavContainer>
				<NavLink to={`${PAGE_PATH.SERVICE}`}>서비스 이용</NavLink>
				<NavLink to={`${PAGE_PATH.LOGIN}`}>로그인</NavLink>
				<NavLink to={`${PAGE_PATH.SIGN_UP}`}>회원가입</NavLink>
				<NavLink to={`${PAGE_PATH.QNA}`}>Q/A</NavLink>
			</S.NavContainer>
		);
	}

	return (
		<S.Container>
			<S.Logo>가족같은</S.Logo>
			{content}
			<S.MobileContainer>
				<GiHamburgerMenu onClick={() => open()} />
				<MobileNavbar />
			</S.MobileContainer>
		</S.Container>
	);
}

export default Navbar;
