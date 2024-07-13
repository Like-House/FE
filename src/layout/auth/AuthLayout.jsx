import { Outlet } from "react-router-dom";
import * as S from "./AuthLayout.style";
import { Navbar } from "../../components";

const AuthLayout = () => {
  return (
    <S.AuthContainer>
      <Navbar />
      <Outlet />
    </S.AuthContainer>
  );
};

export default AuthLayout;
