import * as S from './Navbar.style';

import { NavLink } from 'react-router-dom';

import { Avatar } from '@/components/index.js';
import { PAGE_PATH } from '@/constants';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import useGetUserImg from '@/hooks/queries/user/useGetUserImg';
import LOGO from '@/assets/images/likeHouseLogo.svg';
import NOIMG from '@/assets/images/profile.webp';
import useFcmTokenStore from '@/store/useFcmTokenStore.js';
import usePostFcmToken from '@/hooks/queries/fcm/usePostFcmToken.js';
import { useEffect } from 'react';

function Navbar() {
	const { data: profile, isPending, isSuccess } = useGetProfile();
	const { data: userImg } = useGetUserImg(profile?.imageKeyName);
	const isAuthenticated = isSuccess;
	const { fcmToken } = useFcmTokenStore();
	const { mutate } = usePostFcmToken();

	useEffect(() => {
		if (fcmToken && isAuthenticated) {
			mutate(fcmToken);
		}
	}, [fcmToken, isAuthenticated, mutate]);

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
								src={profile?.imageKeyName ? userImg?.url : NOIMG}
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
