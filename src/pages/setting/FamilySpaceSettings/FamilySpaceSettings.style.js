import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

const FamilySpaceSettingsContainer = styled.div`
  padding: 30px;
  background-color: ${COLOR.BACKGROUND.WHITE};
  height: 100vh;
`;

const SettingsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: ${FONT_SIZE.LG};
  margin-bottom: 20px;
  color: ${COLOR.GRAY.GRAY_800};
`;

const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const DeleteComment = styled.p`
  font-size: ${FONT_SIZE.BASE};
  color: ${COLOR.GRAY.GRAY_700};
`;

const InviteLinkInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: ${FONT_SIZE.SM};
  border: none;
  text-decoration: underline;
  color: ${COLOR.GRAY.GRAY_900};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${COLOR.COMMON.WHITE};
  padding: 8px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.02);
`;

const DeleteButton = styled.button`
  background-color: ${COLOR.MAIN.YELLOW};
  color: ${COLOR.COMMON.BLACK};
  border: none;
  padding: 10px 15px;
  font-size: ${FONT_SIZE.BASE};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.YELLOW.YELLOW_600};
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export {
  FamilySpaceSettingsContainer,
  SettingsSection,
  Title,
  DeleteContainer,
  DeleteComment,
  InviteLinkInput,
  Content,
  DeleteButton,
  Icon,
};
