import * as S from './MainPage.style.js';

import { useState } from 'react';
import { FaEdit, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import Avatar from '@/components/common/avatar/Avatar.jsx';
import PopOver from '@/components/common/popover/PopOver.jsx';

import useFamilySpaceId from '@/hooks/useFamilySpaceId.js';
import useGetPosts from '@/hooks/queries/posts/useGetPosts.js';
import CustomCalendar from '@/components/common/calendar/CustomCalendar.jsx';
import useGetImageUrl from '@/hooks/queries/image/useGetImageUrl.js';

const MainPage = () => {
	const { data } = useFamilySpaceId();
	const { data: boardList } = useGetPosts({
		familySpaceId: data?.familySpaceId,
		page: 1,
		size: 10,
	});

	console.log('familyId', data?.familySpaceId);

	const [showMenu, setShowMenu] = useState(null);
	const [likes, setLikes] = useState({});
	const [comments, setComments] = useState({});
	const [commentCounts, setCommentCounts] = useState({});
	const [commentInputs, setCommentInputs] = useState({});
	const [showCommentInput, setShowCommentInput] = useState({});

	const handleLike = postid => {
		const liked = likes[postid]?.liked || false;
		setLikes(prev => {
			const currentLike = prev[postid];
			const newCount = liked ? currentLike.count - 1 : currentLike.count + 1;
			return {
				...prev,
				[postid]: { count: newCount, liked: !liked },
			};
		});
		updateLikeMutation.mutate({ postid, liked });
	};

	const handleCommentClick = postid => {
		setShowCommentInput(prev => ({
			...prev,
			[postid]: !prev[postid],
		}));
		if (!showCommentInput[postid]) {
			setCommentInputs(prev => ({ ...prev, [postid]: '' }));
		}
	};

	const handleCommentChange = (postid, value) => {
		setCommentInputs(prev => ({ ...prev, [postid]: value }));
	};

	const handleCommentSubmit = postid => {
		if (commentInputs[postid]) {
			setComments(prev => ({
				...prev,
				[postid]: [...prev[postid], commentInputs[postid]],
			}));
			setCommentCounts(prev => ({
				...prev,
				[postid]: prev[postid] + 1,
			}));

			addCommentMutation.mutate({ postid, content: commentInputs[postid] });
			setCommentInputs(prev => ({ ...prev, [postid]: '' }));
		}
	};

	const handleMenuToggle = postid => {
		setShowMenu(prev => (prev === postid ? null : postid));
	};

	const handleMouseLeave = () => {
		setShowMenu(false);
	};

	const menuItems = [
		{
			icon: <FaEdit />,
			message: '수정하기',
			onClick: () => {
				console.log('수정하기 클릭됨');
				setShowMenu(null);
				// 수정로직 추가
			},
		},
		{
			icon: <FaTrashAlt />,
			message: '삭제하기',
			onClick: () => {
				console.log('삭제하기 클릭됨');
				setShowMenu(null);
				deletePostMutation.mutate(showMenu);
			},
		},
		{
			icon: <FaRegBellSlash />,
			message: '알림끄기',
			onClick: () => {
				console.log('알림끄기 클릭됨');
				setShowMenu(null);
				togglePostAlarmMutation.mutate(showMenu);
			},
		},
	];

	return (
		<S.PostContainer>
			<S.PostList>
				{boardList?.posts.map(post => (
						<S.PostItem key={post.postId}>
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
										<button onClick={() => handleMenuToggle(post.id)}>
											<HiMiniEllipsisHorizontal />
										</button>
										<S.Popover>
											{showMenu === post.id && (
												<PopOver
													items={menuItems}
													onMouseLeave={handleMouseLeave}
												/>
											)}
										</S.Popover>
									</S.MenuButton>
								</S.PostHeader>
								<S.Content>{post.content}</S.Content>
								{post.imageUrls && post.imageUrls.length > 0 && (
									<S.Photo src={post.imageUrls[0]} alt="post photo" />
								)}
								<S.Footer>
									<p onClick={() => handleLike(post.id)}>
										좋아요 {likes[post.id]?.count}
									</p>
									<p onClick={() => handleCommentClick(post.id)}>
										댓글 {commentCounts[post.id]}
									</p>
								</S.Footer>

								{showCommentInput[post.id] && (
									<CommentInput
										value={commentInputs[post.id]}
										onChange={e => handleCommentChange(post.id, e.target.value)}
										onSubmit={() => handleCommentSubmit(post.id)}
										disabled={
											!commentInputs[post.id] ||
											commentInputs[post.id].trim() === ''
										}
									/>
								)}
								{comments[post.id] &&
									comments[post.id].map((comment, index) => (
										<S.comment key={index}>{comment}</S.comment>
									))}
							</S.Board>
						</S.PostWrapper>
						<S.Divider />
					</S.PostItem>
				)
				)};
		</S.PostList>
		<S.RightSidebar>
			<S.CalendarWrapper>
				<CustomCalendar size="BASE" hasBackgroundColor={true} />
			</S.CalendarWrapper>
			<S.AlbumWrapper>
				<h2>가족 앨범 보기</h2>
				<p>가족과의 소중한 추억을 앨범으로 확인하세요</p>
			</S.AlbumWrapper>
		</S.RightSidebar>
	</S.PostContainer>
);
};

export default MainPage;