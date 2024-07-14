import styled from 'styled-components';

const getBackgroundColor = (backgroundColor, disabled) =>
  disabled ? '#E6E6E6' : backgroundColor;

const getHoverBackgroundColor = (backgroundColor, disabled) =>
  disabled ? '#E6E6E6' : '#e0b30d';

const getBoxShadow = (hasShadow, boxShadowColor) =>
  hasShadow ? `0px 2px 4px ${boxShadowColor}` : 'none';

const getHoverBoxShadow = (hasShadow, boxShadowColor) =>
  hasShadow ? `0px 4px 8px ${boxShadowColor}` : 'none';

export const Button = styled.button`
  background-color: ${({ backgroundColor, disabled }) =>
    getBackgroundColor(backgroundColor, disabled)};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  box-shadow: ${({ hasShadow, boxShadowColor }) =>
    getBoxShadow(hasShadow, boxShadowColor)};
  width: 64.27px;
  height: 64.27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${({ backgroundColor, disabled }) =>
      getHoverBackgroundColor(backgroundColor, disabled)};
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
