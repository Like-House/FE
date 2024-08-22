import styled from 'styled-components';

import { Link } from 'react-router-dom';
import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const { COLOR } = theme;

const Container = styled.nav`
  background-color: ${COLOR.BACKGROUND.WHITE};
  padding: 30px;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  z-index: 2;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
    padding: 0px;
    display: flex;
  }
`;

const NavBar = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 11px;
    }
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 35px;
    display: flex;
    background-color: ${COLOR.YELLOW.YELLOW_500};
    margin-bottom: 10px;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: ${FONT_SIZE.BASE};
  color: ${COLOR.GRAY.GRAY_800};
`;

const Title = styled.h2`
  font-size: ${FONT_SIZE.LG};
  color: ${COLOR.COMMON.WHITE};
`;

const MoreIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: ${FONT_SIZE.LG};
  color: ${COLOR.GRAY.GRAY_800};
  margin-bottom: 30px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding-left: 20px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${COLOR.GRAY.GRAY_800};
  text-decoration: none;
  font-size: ${FONT_SIZE.BASE};
  padding: 10px 20px;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background-color: ${COLOR.COMMON.WHITE};
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: -5px;
  }
`;

const isSocialLogindiv = styled(Link)`
  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: 56px;
  }
`;

const LogoutSection = styled.div`
  margin-top: -30px;
  width: 100%;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-left: 20px;
    width: 88%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${COLOR.GRAY.GRAY_450};
    background-color: ${COLOR.COMMON.WHITE};
    border-radius: 10px;
  }
`;

const DeleteSection = styled.div`
  display: block;
  color: ${COLOR.GRAY.GRAY_800};
  text-decoration: none;
  font-size: ${FONT_SIZE.BASE};
  width: 100%;
  border-radius: 4px;

  &:hover {
    background-color: ${COLOR.COMMON.WHITE};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: -5px;
  }
`;

const Delete = styled.button`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${COLOR.GRAY.GRAY_800};
  text-decoration: none;
  font-size: ${FONT_SIZE.BASE};
  padding: 10px 20px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: inherit;
  text-align: start;

  &:hover {
    background-color: ${COLOR.COMMON.WHITE};
  }
`;

const Logout = styled.button`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${COLOR.GRAY.GRAY_800};
  text-decoration: none;
  font-size: ${FONT_SIZE.BASE};
  padding: 10px 20px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: inherit;
  text-align: start;

  &:hover {
    background-color: ${COLOR.COMMON.WHITE};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    ${theme.ALIGN.ROW_CENTER};
    padding: 0;
    margin: 0;
  }
`;

export {
  Container,
  NavBar,
  BackButton,
  Title,
  MoreIcon,
  Section,
  SectionTitle,
  StyledLink,
  LogoutSection,
  DeleteSection,
  isSocialLogindiv,
  Delete,
  Logout,
};
