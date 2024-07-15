import styled from "styled-components";
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

export const PopOverContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${theme.COLOR.BACKGROUND.WHITE};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 25px;
  width: 230px;
  gap: 10px;
`;

export const PopOverContent = styled.div`
  display: flex;
  gap: 20px;

  p {
    color: ${theme.COLOR.YELLOW.YELLOW_500};
    font-size: ${FONT_SIZE.TWO_XL};
  }
  
  span {
    padding-top: 3px;
  }
`;