import styled from 'styled-components';
import theme from '../../../theme/theme';

const Alert = styled.div`
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50%; //반응형이 안됨
  }
`;

export { Alert };
