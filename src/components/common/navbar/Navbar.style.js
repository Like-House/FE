import styled from "styled-components";
import theme from "../../../theme/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 60px;
  background-color: ${theme.COLOR.YELLOW.YELLOW_200};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    background-color: ${theme.COLOR.GRAY.GRAY_300};
  }
`;

export { Container };
