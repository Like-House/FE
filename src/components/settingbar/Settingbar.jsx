import * as S from './Settingbar.style';

import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '@/constants/path';
import moreIcon from '@/assets/images/moreBox.png';

function Settingbar({ isopen }) {
	const settingBasePath = `${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}`;
	const navigate = useNavigate();

	return isopen ? (
		<S.Container>
			<S.NavBar>
				<S.MoreIcon src={moreIcon} alt="더보기" onClick={() => navigate(-1)} />
				<S.Title>설정</S.Title>
				<div></div>
			</S.NavBar>
			<S.Section>
				<S.SectionTitle>가족 설정</S.SectionTitle>
				<S.StyledLink to={`${settingBasePath}/family-space-settings`}>
					가족 공간 관리
				</S.StyledLink>
				<S.StyledLink to={`${settingBasePath}/family-settings`}>
					가족 관리
				</S.StyledLink>
			</S.Section>
			<S.Section>
				<S.SectionTitle>개인 설정</S.SectionTitle>
				<S.StyledLink to={`${settingBasePath}/my-posts`}>
					내가 쓴 글
				</S.StyledLink>
				<S.StyledLink to={`${settingBasePath}/notification-settings`}>
					알림 설정
				</S.StyledLink>
				<S.StyledLink to={`${settingBasePath}/edit-profile`}>
					개인정보 수정
				</S.StyledLink>
				<S.StyledLink to={`${settingBasePath}/change-password`}>
					비밀번호 변경
				</S.StyledLink>
				<S.StyledLink to={`${settingBasePath}/delete-account`}>
					탈퇴하기
				</S.StyledLink>
			</S.Section>
			<S.LogoutSection>
				<S.Logout to={`${settingBasePath}/logout`}>로그아웃</S.Logout>
			</S.LogoutSection>
		</S.Container>
	) : (
		<div></div>
	);
}

export default Settingbar;
