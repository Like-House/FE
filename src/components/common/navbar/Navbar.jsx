import { NavLink } from 'react-router-dom';
import * as S from './Navbar.style';
import Avatar from '../avatar/Avatar';

function Navbar() {
	// Q/A 경로 수정
	const data = {
		img: '/src/assets/images/profile.png',
		username: '정혜원',
	};

	let login = false;

	if (login) {
		return (
			<S.Container>
				<S.Logo>가족같은</S.Logo>
				<S.NavContainer>
					<NavLink to={'/'}>서비스 이용</NavLink>
					<NavLink to={'/home'}>가족 공간</NavLink>
					<NavLink to={'/아직 어디로 갈지 몰라'}>
						<p>
							<Avatar src={data.img} size="sm" />
							{data.username}
						</p>
					</NavLink>
				</S.NavContainer>
			</S.Container>
		);
	}

	return (
		<S.Container>
			<S.Logo>가족같은</S.Logo>
			<S.NavContainer>
				<NavLink to={'/'}>서비스 이용</NavLink>
				<NavLink to={'/login'}>로그인</NavLink>
				<NavLink to={'/signup'}>회원가입</NavLink>
				<NavLink to={'/qna'}>Q/A</NavLink>
			</S.NavContainer>
		</S.Container>
	);
}

export default Navbar;
