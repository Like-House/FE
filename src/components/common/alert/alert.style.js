import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR, ALIGN } = theme;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  ${ALIGN.ROW_CENTER};
`;

const getSize = (size) => {
  switch (size) {
    case 'large':
      return '681px, 358px';
    case 'small':
    default:
      return '386px, 272px';
  }
};

export const ModalContainer = styled.div`
  background-color: ${COLOR.MAIN.YELLOW};
  width: ${({ size }) => getSize(size).split(',')[0]};
  height: ${({ size }) => getSize(size).split(',')[1]};
  border-radius: 20px;
  text-align: center;
  padding: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'LINESeedKR-Rg';
`;

export const Icon = styled.div`
  margin: 20px 0px;
  img {
    width: 29px;
    height: 29px;
  }
`;

export const ModalMessage = styled.div`
  font-size: ${FONT_SIZE.LG};
  margin-bottom: 40px;
`;

export const ModalDetailMessage = styled.div`
  font-size: ${FONT_SIZE.BASE};
  gap: 10px;
  margin: 0 40px 40px 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ singleButton }) =>
    singleButton ? 'center' : 'space-around'};
  gap: 20px;
`;

export const Button = styled.button`
  background-color: ${COLOR.COMMON.WHITE};
  border: none;
  border-radius: 10px;
  width: 69px;
  height: 36px;
  cursor: pointer;
  font-size: ${FONT_SIZE.BASE};
  &:hover {
    background-color: ${COLOR.GRAY.GRAY_200};
  }
`;
