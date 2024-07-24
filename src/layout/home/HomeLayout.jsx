import { Outlet, useLocation } from 'react-router-dom';
import * as S from './HomeLayout.style';
import { Sidebar, Settingbar } from '../../components/index';
import { useEffect, useState } from 'react';

const HomeLayout = () => {
  const location = useLocation();
  const [isSetting, setIsSetting] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    if (path.startsWith('/home/setting')) {
      setIsSetting(true);
    } else setIsSetting(false);
  }, [path]);

  return (
    <S.HomeContainer>
      <Sidebar />
      <Settingbar isopen={isSetting} />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.HomeContainer>
  );
};

export default HomeLayout;
