import styled from "styled-components";
import theme from "../../theme/theme";

const AuthContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${theme.ALIGN.COLUMN_CENTER}
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.COLOR.YELLOW.YELLOW_400};
`;

const OutletContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  background-color: ${theme.COLOR.YELLOW.YELLOW_800};
`;

export { AuthContainer, ContentContainer, OutletContainer };
