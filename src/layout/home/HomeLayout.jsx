import { Outlet } from "react-router-dom";
import * as S from "./HomeLayout.style";
import { SideBar } from "../../components";

const HomeLayout = () => {
  return (
    <S.HomeContainer>
      <SideBar />
      <Outlet />
    </S.HomeContainer>
  );
};

export default HomeLayout;
