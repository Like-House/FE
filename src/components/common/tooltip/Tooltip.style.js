import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';

const colorOptions = {
  default: css`
    background-color: ${theme.COLOR.YELLOW.YELLOW_1000};
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  //red
  primary: css`
    background-color: #ff0000;
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  //blue
  secondary: css`
    background-color: #0000ff;
    color: ${theme.COLOR.COMMON.WHITE};
  `,
  outlined: css`
    background-color: ${theme.COLOR.COMMON.WHITE};
    color: ${theme.COLOR.COMMON.BLACK};
    border: 1px solid ${theme.COLOR.COMMON.BLACK};
  `,
};

const sizeStyles = {
  sm: css`
    width: 60px;
    font-size: 9px;
  `,
  md: css`
    width: 120px;
  `,
  lg: css`
    width: 180px;
  `,
};

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  ${({ size }) => sizeStyles[size] || sizeStyles.md};
  text-align: center;
  border-radius: 6px;
  padding: 7px;
  position: absolute;
  z-index: 1;
  ${({ position }) =>
    position === 'top'
      ? css`
          bottom: 150%;
        `
      : css`
          top: 150%;
        `}
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  ${({ backgroundColor }) =>
    colorOptions[backgroundColor] || colorOptions.default};
`;

const TooltipIcon = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export { TooltipWrapper, TooltipText, TooltipIcon };
