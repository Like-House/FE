import styled from 'styled-components';
import theme from '../../../thema/thema';

const { COLOR, ALIGN } = theme;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxOutline = styled.div`
  width: 30px;
  height: 30px;
  border: 1.5px solid ${COLOR.COMMON.BLACK};
  background-color: ${COLOR.COMMON.WHITE};
  border-radius: 3px;
  ${ALIGN.ROW_CENTER}
`;

export const CheckBoxWithBackground = styled.div`
  width: 45px;
  height: 45px;
  border: 2px solid ${COLOR.GRAY.GRAY_200};
  border-radius: 10px;
  background-color: ${({ checked }) =>
    checked ? COLOR.YELLOW.YELLOW_500 : COLOR.GRAY.GRAY_100};
  ${ALIGN.ROW_CENTER}
`;

export const CheckMark = styled.img`
  width: 21px;
  height: 18px;
`;

export const CheckBoxLabel = styled.label`
  font-size: ${({ hasLabel }) => (hasLabel ? '20px' : '24px')};
  margin-left: 10px;
`;

export const CheckBoxLabelBold = styled.span`
  font-size: 20px;
  color: ${COLOR.MAIN.YELLOW};
  font-weight: bold;
`;

export const CheckBoxLabelNormal = styled.span`
  font-size: ${({ hasLabel }) => (hasLabel ? '20px' : '24px')};
  color: ${COLOR.GRAY.GRAY_900};
`;
