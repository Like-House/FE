import { useState } from "react";
import * as S from "./MainPage.style.js";
import boardList from "../../constants/boardList";
import Avatar from "../../components/common/avatar/Avatar.jsx";
import CustomButton from "../../components/common/button/CustomButton.jsx";

const MainPage = () => {
  const [showMenu, setShowMenu] = useState(null);
  const [likes, setLikes] = useState(
    boardList.reduce((acc, post) => ({ ...acc, [post.id]: { count: post.likes, liked: false } }), {})
  );

  const [comments, setComments] = useState(
    boardList.reduce((acc, post) => ({ ...acc, [post.id]: [] }), {})
  );
  const [commentCounts, setCommentCounts] = useState(
    boardList.reduce((acc, post) => ({ ...acc, [post.id]: post.comments }), {})
  );
  const [commentInputs, setCommentInputs] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});

  const handleLike = (postid) => {
    setLikes(prev => {
      const currentLike = prev[postid];
      const newCount = currentLike.liked ? currentLike.count - 1 : currentLike.count + 1;
      return {
        ...prev,
        [postid]: { count: newCount, liked: !currentLike.liked }
      };
    });
  };

  const handleCommentClick = (postid) => {
    setShowCommentInput(prev => ({
      ...prev,
      [postid]: !prev[postid] // 클릭 시 상태 토글
    }));
    if (!showCommentInput[postid]) {
      setCommentInputs(prev => ({ ...prev, [postid]: "" })); // 댓글 입력 초기화
    }
  };

  const handleCommentChange = (postid, value) => {
    setCommentInputs(prev => ({ ...prev, [postid]: value }));
  };

  const handleCommentSubmit = (postid) => {
    if (commentInputs[postid]) {
      setComments(prev => ({
        ...prev,
        [postid]: [...prev[postid], commentInputs[postid]]
      }));
      setCommentCounts(prev => ({
        ...prev,
        [postid]: prev[postid] + 1
      }));

      setCommentInputs(prev => ({ ...prev, [postid]: "" }));
    }
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
                  <p onClick={() => handleLike(post.id)}>좋아요 {likes[post.id].count}</p>
                  <p onClick={() => handleCommentClick(post.id)}>댓글 {commentCounts[post.id]}</p>
                </S.Footer>

                {/* 댓글 입력 필드와 제출 버튼 */}
                {showCommentInput[post.id] && (
                  <S.CommentInput>
                    <input 
                      type="text"
                      value={commentInputs[post.id]}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleCommentSubmit(post.id);
                        }
                      }}
                      placeholder="댓글 달기"
                    />
                    <CustomButton
                      btnType="secondary"
                      label="댓글 달기"
                      disabled={!commentInputs[post.id] || commentInputs[post.id].trim() === ""}
                      onClick={() => handleCommentSubmit(post.id)}
                      width="140px"
                    />
                  </S.CommentInput>
                )}
                {comments[post.id] && comments[post.id].map((comment, index) => (
                  <S.Comment key={index}>{comment}</S.Comment>
                ))}

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
