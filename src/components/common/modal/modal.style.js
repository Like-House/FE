import styled from "styled-components";
import theme from "../../../theme/theme";

const { COLOR, ALIGN } = theme;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${theme.ALIGN.ROW_CENTER};
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 330px;
  
  ${theme.COLOR.COMMON.WHITE};
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  ${theme.ALIGN.COLUMN_CENTER};

  margin-top: 5px;
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
`;