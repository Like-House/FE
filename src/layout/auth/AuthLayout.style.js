import styled from "styled-components";
import theme from "../../theme/theme";

const AuthContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.COLOR.YELLOW.YELLOW_400};
`;

const OutletContainer = styled.div`
  flex: 1;
`;

export { AuthContainer, ContentContainer, OutletContainer };
