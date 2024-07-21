import { useState } from "react";
import * as S from "./MainPage.style.js";
import boardList from "../../constants/boardList";
import Avatar from "../../components/common/avatar/Avatar.jsx";

const MainPage = () => {
  const [showMenu, setShowMenu] = useState(null);
  const [likes, setLikes] = useState(
    boardList.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {}));

  const handleLike = (postid) => {
    setLikes(prev => ({ ...prev, [postid]: (prev[postid] || 0) + 1 }));
  };


  return (
    <S.PostContainer>
      <S.PostList>
        {boardList.map((post) => (
          <S.PostItem key={post.id}>
            <S.PostWrapper>
              <S.Profile>
                <Avatar src={post.photo} />
              </S.Profile>
              
              <S.Board>
                <S.PostHeader>
                  <S.AuthorWrapper>
                    <S.Author>{post.author}</S.Author>
                    <S.DateTime>{post.date} {post.time}</S.DateTime>
                  </S.AuthorWrapper>
                  <S.MenuButton onClick={() => handleMenuToggle(post.id)}>⋮</S.MenuButton>
                  {showMenu === post.id && (
                    <S.Menu>
                      <S.MenuItem>수정하기</S.MenuItem>
                      <S.MenuItem>삭제하기</S.MenuItem>
                    </S.Menu>
                  )}
                </S.PostHeader>
                <S.Content>{post.content}</S.Content>
                {post.photo && <S.Photo src={post.photo} alt="post photo" />}
                <S.Footer>
                  <p onClick={() => handleLike(post.id)}>좋아요 {likes[post.id]}</p>
                  <p>댓글 {post.comments}</p>
                </S.Footer>
              </S.Board>
            </S.PostWrapper>
            <S.Divider />
          </S.PostItem>
        ))}
      </S.PostList>
    </S.PostContainer>
  );
};

export default MainPage;
