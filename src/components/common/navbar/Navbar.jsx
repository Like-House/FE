import { NavLink } from 'react-router-dom';
import * as S from './Navbar.style';
import { PAGE_PATH } from '../../../constants';
import { Avatar } from '../../';
import useAuthStore from '../../../store/useAuthStore';
import LOGO from '../../../assets/images/likeHouseLogo.svg';
import useGetProfile from '../../../hooks/queries/user/useGetProfile';
import useGetUserImg from '../../../hooks/queries/user/useGetUserImg';
import NOIMG from '../../../assets/images/profile.webp';

function Navbar() {
	const { isAuthenticated } = useAuthStore();
	const { data: profile, isPending } = useGetProfile();
	const { data: userImg } = useGetUserImg(profile?.profileImage);

	let content;

	if (isAuthenticated) {
		content = (
			<S.NavContainer>
				<NavLink to={`${PAGE_PATH.SERVICE}`}>서비스 이용</NavLink>
				<NavLink to={`${PAGE_PATH.HOME}`}>가족 공간</NavLink>
				<NavLink
					to={`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}/${PAGE_PATH.EDIT_PROFILE}`}
				>
					{isPending ? (
						<p>loading...</p>
					) : (
						<p>
							<Avatar
								src={profile?.profileImage ? userImg?.url : NOIMG}
								size="sm"
							/>
							{profile?.name}
						</p>
					)}
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
			<S.Logo src={LOGO} />
			{content}
		</S.Container>
	);
}

export default Navbar;
