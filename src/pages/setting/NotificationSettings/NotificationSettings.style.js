import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

const Container = styled.div`
  padding: 50px;
  background-color: ${COLOR.BACKGROUND.WHITE};
  height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 50px;
  font-size: ${FONT_SIZE.XL};
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  justify-content: space-between;
`;

const Label = styled.div`
  flex: 1;
  font-size: ${FONT_SIZE.LG};
  margin-bottom: 8px;
`;

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Description = styled.div`
  flex: 2;
  font-size: ${FONT_SIZE.BASE};
`;

export { Container, Title, NotificationItem, Label, LabelBox, Description };
