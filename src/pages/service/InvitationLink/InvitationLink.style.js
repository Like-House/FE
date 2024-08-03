import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.COLOR.BACKGROUND};
  padding: 50px;
`;

const Container = styled.div`
  background-color: ${theme.COLOR.COMMON.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 90%;
  padding: 70px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: ${FONT_SIZE.TWO_XL};
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: ${FONT_SIZE.BASE};
  margin-bottom: 100px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: ${FONT_SIZE.SM};
  margin-bottom: 10px;
  align-self: flex-start;
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`;

const ErrorMsg = styled.div`
  color: ${theme.COLOR.COMMON.RED};
  font-size: ${FONT_SIZE.SM};
  margin-top: 70px;
  position: absolute;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
`;

export {
  OuterContainer,
  Container,
  Title,
  SubTitle,
  Form,
  Label,
  InputContainer,
  ErrorMsg,
  ButtonContainer,
  Icon,
};
