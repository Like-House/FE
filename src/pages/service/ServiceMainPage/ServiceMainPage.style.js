import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

const Container = styled.div`
  padding: 50px;
`;

const Title = styled.h1`
  font-size: ${FONT_SIZE.TWO_XL};
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const InviteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

const InviteTitle = styled.h2`
  font-size: ${FONT_SIZE.SM};
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

const CreateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

const CreateTitle = styled.h2`
  font-size: ${FONT_SIZE.SM};
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background-color: ${(props) => props.bgColor || COLOR.COMMON.WHITE};
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 300px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Picture = styled.div`
  font-size: ${FONT_SIZE.BASE};
  width: 150px;
  height: 150px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  button {
    background-color: ${(props) =>
      props.bgColor === COLOR.COMMON.WHITE
        ? COLOR.MAIN.YELLOW
        : COLOR.COMMON.WHITE};
  }
  svg {
    margin-left: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: ${FONT_SIZE.XL};
  margin-bottom: 40px;
  white-space: nowrap;
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

const SubTitle = styled.h2`
  font-size: ${FONT_SIZE.SM};
  margin-top: 40px;
  margin-bottom: 25px;
`;

const HelpSection = styled.div`
  margin-top: 50px;
  text-align: left;
`;

const HelpContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

const HelpTitle = styled.h2`
  font-size: ${FONT_SIZE.TWO_XL};
  padding-right: 15px;
`;

const HelpExplain = styled.div`
  font-size: ${FONT_SIZE.SM};
  margin-bottom: 3px;
`;

const HelpList = styled.ul`
  list-style-type: none;
  padding: 0;
  border-top: 2px solid ${COLOR.COMMON.BLACK};
  margin-top: 25px;
  padding-top: 25px;
`;

const HelpMain = styled.li`
  font-size: ${FONT_SIZE.BASE};
  margin-bottom: 10px;
`;

const HelpItem = styled.li`
  font-size: ${FONT_SIZE.BASE};
  font-weight: bold;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${COLOR.GRAY.GRAY_200};
`;

const BgColor = {
  YELLOW: COLOR.MAIN.YELLOW,
  WHITE: COLOR.COMMON.WHITE,
};

export {
  Container,
  Title,
  Content,
  InviteSection,
  InviteTitle,
  CreateSection,
  CreateTitle,
  Card,
  CardContent,
  Button,
  CardTitle,
  SubContent,
  SubTitle,
  HelpContent,
  HelpExplain,
  HelpSection,
  HelpTitle,
  HelpList,
  HelpMain,
  HelpItem,
  Picture,
  BgColor,
};
