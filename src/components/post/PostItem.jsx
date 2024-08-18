import Avatar from '@/components/common/avatar/Avatar';
import PopOver from '@/components/common/popover/PopOver';
import * as S from './PostItem.style';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import useGetImageUrl from '@/hooks/queries/image/useGetImageUrl.js';
import useAddComment from '@/hooks/queries/comment/useAddComment.js';

const PostItem = ({
	post,
	likes,
	onLike,
	onCommentClick,
	commentCounts,
	comments = {},
	showCommentInput,
	handleMenuToggle,
	showMenu,
	handleMouseLeave,
	menuItems,
	commentItems,
	commentInputs,
	handleCommentChange,
	handleCommentSubmit,
}) => {
	const { data: realImageUrl } = useGetImageUrl(post?.imageUrls[0]);

	const handleLikeClick = event => {
		event.stopPropagation();
		onLike(post.postId);
	};

	const handleCommentClick = event => {
		event.stopPropagation();
		onCommentClick(post.postId);
	};

	const handleMenuClick = event => {
		event.stopPropagation();
		handleMenuToggle(post.postId);
	};

	const handlePopoverClick = event => {
		event.stopPropagation();
	};

	const formatDate = dateString => {
		const date = new Date(dateString);
		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		};

		const formatter = new Intl.DateTimeFormat('ko-KR', options);

		const [year, month, day] = formatter
			.formatToParts(date)
			.filter(part => part.type !== 'literal')
			.map(part => part.value);
		const [hour, minute] = formatter
			.formatToParts(date)
			.filter(part => part.type === 'hour' || part.type === 'minute')
			.map(part => part.value);

		const ampm = date.getHours() >= 12 ? '오후' : '오전';

		return `${year}년 ${month}월 ${day}일 ${ampm} ${hour}시 ${minute}분`;
	};

	const handleKeyDown = event => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			handleCommentSubmit(post.postId);
		}
	};

	//console.log(post);

	return (
		<S.PostItem>
			<S.PostWrapper>
				<S.Profile>
					<Avatar src={post.profileImage} alt='profile'/>
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
							<S.Popover onClick={handlePopoverClick}>
								{showMenu === post.postId && (
									<PopOver items={menuItems} onMouseLeave={handleMouseLeave} />
								)}
							</S.Popover>
						</S.MenuButton>
					</S.PostHeader>
					<S.Content>{post.content}</S.Content>

					<S.Photo src={realImageUrl?.url} alt="post photo" />

					<S.Footer>
						<p onClick={handleLikeClick}>
							좋아요 {likes[post.postId]?.count || 0}
						</p>
						<p onClick={handleCommentClick}>
							댓글 {commentCounts[post.postId] || 0}
						</p>
					</S.Footer>
				</S.Board>
			</S.PostWrapper>

				<S.CommentContainer>
					{showCommentInput[post.postId] && (
						<div>
							<S.CommentInput onClick={handlePopoverClick}>
								{/* 댓글 작성하는 본인 프로필 이미지 */}
								<S.Profile>
									<Avatar src={post.profileImage} alt='profile'/>
								</S.Profile>
								<input
									value={commentInputs[post.postId]}
									onChange={e => handleCommentChange(post.postId, e.target.value)}
									onKeyDown={handleKeyDown}
									placeholder="댓글을 입력하세요"
								/>
							</S.CommentInput>

							{Array.isArray(comments[post.postId]) &&
								comments[post.postId].map((comment, index) => (
										<S.CommentWrapper key={`${post.postId}-${index}`}>

											<S.Profile>
												<Avatar src={post.profileImage} alt='profile'/>
											</S.Profile>

											<S.Board>
												<S.PostHeader>
													{/* 댓글 작성한 본인 이름, 작성한 시간 */}
													<S.AuthorWrapper>
														<S.Author>{post.authorNickname}</S.Author>
														<S.DateTime>{formatDate(post.createdAt)}</S.DateTime>
													</S.AuthorWrapper>

													<S.MenuButton>
														<button onClick={handleMenuClick}>
															<HiMiniEllipsisHorizontal />
														</button>
														<S.Popover onClick={handlePopoverClick}>
															{showMenu === post.postId && (
																<PopOver items={commentItems} onMouseLeave={handleMouseLeave} />
															)}
														</S.Popover>
													</S.MenuButton>
												</S.PostHeader>
												<div>{comment}</div>
											</S.Board>
										</S.CommentWrapper>
								))}
						</div>
					)}
				</S.CommentContainer>
			<S.Divider />
		</S.PostItem>
	);
};

export default PostItem;
