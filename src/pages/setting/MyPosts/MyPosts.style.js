import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR, WINDOW_SIZE } = theme;

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  background-color: ${COLOR.BACKGROUND.WHITE};
  flex: 1;
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  font-size: ${FONT_SIZE.TWO_XL};
`;

const Post = styled.div`
  border-radius: 4px;
  background-color: ${COLOR.COMMON.WHITE};
  padding: 40px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media ${WINDOW_SIZE.TABLET} {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PostText = styled.p`
  margin-bottom: 30px;
  font-size: ${FONT_SIZE.BASE};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Tag = styled.span`
  color: ${COLOR.YELLOW.YELLOW_500};
  display: block;
  margin-bottom: 10px;
`;

const Date = styled.span`
  font-size: ${FONT_SIZE.XS};
  display: block;
`;

const Icon = styled.img`
  width: 160px;
  height: 160px;
  margin-left: 40px;

  @media ${WINDOW_SIZE.TABLET} {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${WINDOW_SIZE.TABLET} {
    flex-direction: column;
  }
`;

export {
  Container,
  Heading,
  Post,
  InnerContainer,
  PostText,
  Tag,
  Date,
  Icon,
  PostContent,
};
