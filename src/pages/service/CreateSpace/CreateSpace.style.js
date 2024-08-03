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
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: ${FONT_SIZE.BASE};
  margin-bottom: 50px;
  line-height: 1.5;
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
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
`;

export {
  OuterContainer,
  Container,
  Title,
  SubTitle,
  Description,
  Form,
  Label,
  InputContainer,
  ButtonContainer,
  Icon,
};
