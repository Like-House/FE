import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  padding: 50px;
  background-color: #FAFAFA;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;

  @media (max-width: 768px) { /* 화면 너비가 768px 이하일 때 */
    width: 90%; /* 너비를 90%로 줄임 */
  }

  @media (max-width: 480px) { /* 화면 너비가 480px 이하일 때 */
    width: 100%; /* 최대 너비를 100%로 설정 */
  }
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 40px;
  padding-bottom: 0px;
  
  gap: 30px;
  width: 100%;
`;

const PostWrapper = styled.div`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;

  width: 90px;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
`;

const Divider = styled.hr`
  width: 99%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0 5px;
`;

const PostHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Author = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 5px 0 10px;
`;

const DateTime = styled.div`
  color: #888;
  font-size: 13px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
`;

const Menu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const MenuItem = styled.div`
  width: 80px;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Content = styled.div`
  margin-bottom: 13px;
  font-size: 16px;
`;

const Photo = styled.img`
  width: 500px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  font-size: 14px;

  p {
    cursor: pointer;
  }
`;

export {
  PostContainer,
  PostList,
  PostItem,
  PostHeader,
  PostWrapper,
  Profile,
  AuthorWrapper,
  Author,
  DateTime,
  Content,
  Photo,
  Board,
  Footer,
  Divider,
  Menu,
  MenuButton,
  MenuItem
}