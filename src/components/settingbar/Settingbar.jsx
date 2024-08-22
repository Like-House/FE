import * as S from './Settingbar.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_PATH } from '@/constants/path';
import moreIcon from '@/assets/images/moreBox.png';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import { useState } from 'react';
import { Alert } from '..';
import useLogout from '@/hooks/queries/user/useLogout';
import useDeleteAccount from '@/hooks/queries/user/useDeleteAccount';

function Settingbar({ isopen }) {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const settingBasePath = `${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}`;
  const navigate = useNavigate();

  const { data: profile } = useGetProfile();
  const isSocialLogin = profile?.socialType !== 'LOCAL';
  const { mutate: logout } = useLogout();
  const { mutate: deleteAccount } = useDeleteAccount();

  const isSubPath = location.pathname !== settingBasePath;

  const shouldShowSettingBar =
    !isSubPath || !window.matchMedia('(max-width: 768px)').matches;

  return isopen && shouldShowSettingBar ? (
    <S.Container>
      <S.NavBar>
        <S.MoreIcon src={moreIcon} alt='더보기' onClick={() => navigate(-1)} />
        <S.Title>설정</S.Title>
        <div></div>
      </S.NavBar>
      <S.Section>
        <S.SectionTitle>가족 설정</S.SectionTitle>
        <S.StyledLink
          to={`${settingBasePath}/${PAGE_PATH.FAMILY_SPACE_SETTINGS}`}
        >
          가족 공간 관리
        </S.StyledLink>
        <S.StyledLink to={`${settingBasePath}/${PAGE_PATH.FAMILY_SETTINGS}`}>
          가족 관리
        </S.StyledLink>
      </S.Section>
      <S.Section>
        <S.SectionTitle>개인 설정</S.SectionTitle>
        <S.StyledLink to={`${settingBasePath}/${PAGE_PATH.MY_POSTS}`}>
          내가 쓴 글
        </S.StyledLink>
        <S.StyledLink
          to={`${settingBasePath}/${PAGE_PATH.NOTIFICATION_SETTINGS}`}
        >
          알림 설정
        </S.StyledLink>
        <S.StyledLink to={`${settingBasePath}/${PAGE_PATH.EDIT_PROFILE}`}>
          개인정보 수정
        </S.StyledLink>
        {!isSocialLogin && (
          <S.StyledLink to={`${settingBasePath}/${PAGE_PATH.CHANGE_PASSWORD}`}>
            비밀번호 변경
          </S.StyledLink>
        )}
        <S.DeleteSection onClick={() => setIsDeleteAlertOpen(true)}>
          <S.Delete>탈퇴하기</S.Delete>
        </S.DeleteSection>
      </S.Section>
      <S.LogoutSection onClick={() => setIsLogoutOpen(true)}>
        <S.Logout>로그아웃</S.Logout>
      </S.LogoutSection>
      {isSocialLogin && <S.isSocialLogindiv />}

      <Alert
        onClose={() => setIsLogoutOpen(false)}
        message={'로그아웃 하시겠습니까?'}
        isOpen={isLogoutOpen}
        onConfirm={() => {
          setIsLogoutOpen(false);
          logout(null);
          navigate('/');
        }}
      />

      <Alert
        onClose={() => setIsDeleteAlertOpen(false)}
        isOpen={isDeleteAlertOpen}
        message={'정말 탈퇴하시겠습니까?'}
        detailMessage={
          '이 계정을 탈퇴하면 기존에 생성된 가족 공간은 자동으로 삭제되며\n초대된 가족들은 자동적으로 해당 가족 공간에서 탈퇴처리 됩니다.\n한 번 삭제된 가족 공간은 복구가 불가능합니다.'
        }
        onConfirm={() => {
          setIsDeleteAlertOpen(false);
          deleteAccount(null);
        }}
      />
    </S.Container>
  ) : (
    <div></div>
  );
}

export default Settingbar;
