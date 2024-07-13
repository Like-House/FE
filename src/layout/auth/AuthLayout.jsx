import { Outlet } from "react-router-dom";
import * as S from "./AuthLayout.style";
import { Navbar } from "../../components";

const AuthLayout = () => {
  return (
    <S.AuthContainer>
      <S.ContentContainer>
        <Navbar />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.ContentContainer>
    </S.AuthContainer>
  );
};

export default AuthLayout;
