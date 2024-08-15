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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    const formatter = new Intl.DateTimeFormat('ko-KR', options);

    const [year, month, day] = formatter.formatToParts(date).filter(part => part.type !== 'literal').map(part => part.value);
    const [hour, minute] = formatter.formatToParts(date).filter(part => part.type === 'hour' || part.type === 'minute').map(part => part.value);
    
    const ampm = date.getHours() >= 12 ? '오후' : '오전';

    return `${year}년 ${month}월 ${day}일 ${ampm} ${hour}시 ${minute}분`;
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
              <S.DateTime>{formatDate(post.createdAt)}</S.DateTime>
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