import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const Container = styled.div`
  padding: 50px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 20px;
  }
`;

const Section = styled.div`
  display: flex;
  gap: 10px;
`;

const SectionTitle = styled.h2`
  font-size: ${FONT_SIZE.TWO_XL};
  margin-bottom: 40px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.LG};
  }
`;

const MoreSection = styled.div`
  display: none;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const MoreTitle = styled.h2`
  font-size: ${FONT_SIZE.TWO_XL};
`;

const MoreIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const MemberCount = styled.div`
  font-size: ${FONT_SIZE.XL};
  margin-top: 3px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;

const FamilyList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export {
  Container,
  Section,
  SectionTitle,
  MoreSection,
  MoreTitle,
  MoreIcon,
  MemberCount,
  FamilyList,
};
