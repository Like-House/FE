import { useState } from "react";
import * as S from "./MainPage.style.js";
import boardList from "../../constants/boardList";
import Avatar from "../../components/common/avatar/Avatar.jsx";
import CommentInput from "../../components/Comment/Comment.jsx";
import PopOver from "../../components/common/popover/PopOver.jsx";

import { FaEdit, FaTrashAlt, FaRegBellSlash } from "react-icons/fa";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

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
      [postid]: !prev[postid]
    }));
    if (!showCommentInput[postid]) {
      setCommentInputs(prev => ({ ...prev, [postid]: "" }));
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

  const handleMenuToggle = (postid) => {
    setShowMenu(prev => (prev === postid ? null : postid));
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const menuItems = [
    {
      icon: <FaEdit />,
      message: "수정하기",
      onClick: () => {
        console.log("수정하기 클릭됨");
        setShowMenu(null);
        // 수정 로직 추가
      },
    },
    {
      icon: <FaTrashAlt />,
      message: "삭제하기",
      onClick: () => {
        console.log("삭제하기 클릭됨");
        setShowMenu(null);
        // 삭제 로직 추가
      },
    },
    {
      icon: <FaRegBellSlash />,
      message: "알림끄기",
      onClick: () => {
        console.log("알림끄기 클릭됨");
        setShowMenu(null);
        // 알림끄기 로직 추가
      },
    },
  ];

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
                  
                  <S.MenuButton onClick={() => handleMenuToggle(post.id)}><HiMiniEllipsisHorizontal /></S.MenuButton>
                  {showMenu === post.id && (
                    <PopOver items={menuItems} onMouseLeave={handleMouseLeave}/>
                  )}
                  
                </S.PostHeader>
                <S.Content>{post.content}</S.Content>
                {post.photo && <S.Photo src={post.photo} alt="post photo" />}
                <S.Footer>
                  <p onClick={() => handleLike(post.id)}>좋아요 {likes[post.id].count}</p>
                  <p onClick={() => handleCommentClick(post.id)}>댓글 {commentCounts[post.id]}</p>
                </S.Footer>

                {/* 댓글 입력, 제출 */}
                {showCommentInput[post.id] && (
                  <CommentInput
                  value={commentInputs[post.id]}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  onSubmit={() => handleCommentSubmit(post.id)}
                  disabled={!commentInputs[post.id] || commentInputs[post.id].trim() === ""}
                  />
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
      <S.RightSidebar>
        <S.CalendarWrapper>
          <p>달력자리</p>
        </S.CalendarWrapper>
        <S.AlbumWrapper>
          <p>가족 앨범 보기</p>
        </S.AlbumWrapper>
      </S.RightSidebar>
    </S.PostContainer>
  );
};

export default MainPage;