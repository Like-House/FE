import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

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
`;

const MemberCount = styled.div`
  font-size: ${FONT_SIZE.XL};
  margin-top: 3px;
`;

const FamilyList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const FamilyMember = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: ${COLOR.COMMON.WHITE};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 15px;
  }
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    flex-direction: row;
    align-items: center;
  }
  button {
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: 12px;
      white-space: nowrap;
      width: 8px;
      height: 15px;
      justify-content: center;
    }
  }
`;

const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MemberNameRole = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.span`
  font-size: ${FONT_SIZE.LG};
  padding: 2px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;

const MemberRole = styled.span`
  font-size: ${FONT_SIZE.SM};
  padding: 3px;
  margin-bottom: 9px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
    margin-bottom: 5px;
  }
`;

const MemberDescription = styled.span`
  font-size: ${FONT_SIZE.BASE};
  padding: 3px;
  margin-left: 80px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const HostTag = styled.span`
  font-size: ${FONT_SIZE.BASE};
  color: ${COLOR.YELLOW.YELLOW_500};
  margin-left: 20px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
    margin-left: 10px;
  }
`;

export {
  Container,
  Section,
  SectionTitle,
  MemberCount,
  FamilyList,
  FamilyMember,
  MemberInfoWrapper,
  MemberInfo,
  MemberDetails,
  MemberNameRole,
  MemberName,
  MemberRole,
  MemberDescription,
  HostTag,
};
