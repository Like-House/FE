import styled from 'styled-components';
import theme from '../../theme/theme';
import { FONT_SIZE } from '../../constants/size';

const { COLOR } = theme;

const Container = styled.div`
  padding: 50px;
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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: ${COLOR.COMMON.WHITE};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
`;

const MemberInfo = styled.div`
  display: flex;
`;

const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MemberName = styled.span`
  font-size: ${FONT_SIZE.LG};
  padding: 2px;
`;

const MemberRole = styled.span`
  font-size: ${FONT_SIZE.SM};
  padding: 3px;
  margin-bottom: 9px;
`;

const MemberDescription = styled.span`
  font-size: ${FONT_SIZE.BASE};
  padding: 3px;
`;

const HostTag = styled.span`
  font-size: ${FONT_SIZE.BASE};
  color: ${COLOR.YELLOW.YELLOW_500};
  margin-left: 20px;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditProfile = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

const EditContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditName = styled.div`
  font-size: ${FONT_SIZE.TWO_XL};
  font-weight: bold;
  margin-top: 10px;
`;

const EditRole = styled.div`
  font-size: ${FONT_SIZE.BASE};
  color: ${COLOR.GRAY.GRAY_700};
`;

const CustomQuery = styled.div`
  font-size: ${FONT_SIZE.BASE};
  margin-top: 50px;
  margin-bottom: 5px;
  color: ${COLOR.GRAY.GRAY_700};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 180px;
`;

export {
  Container,
  Section,
  SectionTitle,
  MemberCount,
  FamilyList,
  FamilyMember,
  MemberInfo,
  MemberDetails,
  MemberName,
  MemberRole,
  MemberDescription,
  HostTag,
  EditContainer,
  EditProfile,
  EditContent,
  EditName,
  EditRole,
  CustomQuery,
  ButtonContainer,
};
