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
              <S.DateTime>{post.createdAt}</S.DateTime>
            </S.AuthorWrapper>

            <S.MenuButton>
              <button onClick={() => handleMenuToggle(post.postId)}>
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
            <p onClick={() => onLike(post.postId)}>
              좋아요 {likes[post.postId]?.count || 0}
            </p>
            <p onClick={() => onCommentClick(post.postId)}>
              댓글 {commentCounts[post.postId]}
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