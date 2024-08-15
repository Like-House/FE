import Avatar from '@/components/common/avatar/Avatar';
import PopOver from '@/components/common/popover/PopOver';
import * as S from './PostItem.style.js';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';

const PostItem = ({
  post,
  likes,
  onLike,
  onCommentClick,
  commentCounts,
  comments,
  showCommentInput,
  handleMenuToggle,
  showMenu,
  handleMouseLeave,
  menuItems,
  commentInputs,
  handleCommentChange,
  handleCommentSubmit
}) => {

  const handleLikeClick = (event) => {
    event.stopPropagation();
    onLike(post.postId);
  };

  const handleCommentClick = (event) => {
    event.stopPropagation();
    onCommentClick(post.postId);
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
    handleMenuToggle(post.postId);
  };
  
  return (
    <S.PostItem>
      <S.PostWrapper>
        <S.Profile>
          <Avatar src={post.photo} />
        </S.Profile>

        <S.Board>
          <S.PostHeader>
            <S.AuthorWrapper>
              <S.Author>{post.authorNickname}</S.Author>
              <S.DateTime>{new Date(post.createdAt).toLocaleDateString()}</S.DateTime>
            </S.AuthorWrapper>

            <S.MenuButton>
              <button onClick={handleMenuClick}>
                <HiMiniEllipsisHorizontal />
              </button>
              <S.Popover>
                {showMenu === post.postId && (
                  <PopOver items={menuItems} onMouseLeave={handleMouseLeave} />
                )}
              </S.Popover>
            </S.MenuButton>
          </S.PostHeader>
          <S.Content>{post.content}</S.Content>
          {post.imageUrls && post.imageUrls.length > 0 && (
            <S.Photo src={post.imageUrls[0]} alt="post photo" />
          )}
          <S.Footer>
            <p onClick={handleLikeClick}>
              좋아요 {likes[post.postId]?.count || 0}
            </p>
            <p onClick={handleCommentClick}>
              댓글 {commentCounts[post.postId] || 0}
            </p>
          </S.Footer>

          {showCommentInput[post.postId] && (
            <S.CommentInputWrapper>
              <S.CommentInput
                value={commentInputs[post.postId]}
                onChange={e => handleCommentChange(post.postId, e.target.value)}
                onSubmit={() => handleCommentSubmit(post.postId)}
                disabled={
                  !commentInputs[post.postId] ||
                  commentInputs[post.postId].trim() === ''
                }
              />
            </S.CommentInputWrapper>
          )}
          {comments[post.postId] &&
            comments[post.postId].map((comment, index) => (
              <S.Comment key={index}>{comment}</S.Comment>
            ))}
        </S.Board>
      </S.PostWrapper>
      <S.Divider />
    </S.PostItem>
  );
};

export default PostItem;