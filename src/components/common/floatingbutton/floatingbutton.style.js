import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../../theme/theme';

const getBackgroundColor = (backgroundColor, disabled) =>
  disabled ? theme.COLOR.GRAY.GRAY_100 : backgroundColor;

const getBoxShadow = (hasShadow, boxShadowColor) =>
  hasShadow ? `0px 2px 4px ${boxShadowColor}` : 'none';

const getHoverBoxShadow = (hasShadow, boxShadowColor) =>
  hasShadow ? `0px 4px 8px ${boxShadowColor}` : 'none';

const Button = styled.button`
  background-color: ${({ backgroundColor, disabled }) =>
    getBackgroundColor(backgroundColor, disabled)};
  border: 1px solid
    ${({ borderColor }) => borderColor || theme.COLOR.MAIN.YELLOW};
  border-radius: 50%;
  box-shadow: ${({ hasShadow, boxShadowColor }) =>
    getBoxShadow(hasShadow, boxShadowColor)};
  width: 64.27px;
  height: 64.27px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
  ${theme.ALIGN.ROW_CENTER};

  &:hover {
    background-color: ${({ backgroundColor, disabled }) =>
      disabled ? theme.COLOR.GRAY.GRAY_100 : darken(0.1, backgroundColor)};
    box-shadow: ${({ hasShadow, boxShadowColor }) =>
      getHoverBoxShadow(hasShadow, boxShadowColor)};
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }

  img {
    width: 24.72px;
    height: 24.72px;
  }
`;

export { Button };
