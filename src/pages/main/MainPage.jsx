import * as S from './MainPage.style.js';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';

import useFamilySpaceId from '@/hooks/useFamilySpaceId.js';
import useGetPosts from '@/hooks/queries/posts/useGetPosts.js';
import CustomCalendar from '@/components/common/calendar/CustomCalendar.jsx';
import useDeletePost from '@/hooks/queries/posts/useDeletePost.js';
import useLikePost from '@/hooks/queries/posts/useLikePost.js';
import useUnlikePost from '@/hooks/queries/posts/useUnLikePost.js';

import PostItem from '@/components/post/PostItem.jsx';

const LOCAL_STORAGE_LIKES_KEY = 'likes';

const MainPage = () => {
	const navigate = useNavigate();
	const { data } = useFamilySpaceId();
	const { data: boardList } = useGetPosts({
		familySpaceId: data?.familySpaceId,
		page: 1,
		size: 10,
	});

	// console.log('familyId', data?.familySpaceId);

	const { mutate: deletePost } = useDeletePost();
	const likePostMutation = useLikePost();
	const unlikePostMutation = useUnlikePost();

	const [showMenu, setShowMenu] = useState(null);
	const [likes, setLikes] = useState({});
	const [comments, setComments] = useState({});
	const [commentCounts, setCommentCounts] = useState({});
	const [commentInputs, setCommentInputs] = useState({});
	const [showCommentInput, setShowCommentInput] = useState({});

	useEffect(() => {
		const storedLikes = localStorage.getItem(LOCAL_STORAGE_LIKES_KEY);
		if (storedLikes) {
			setLikes(JSON.parse(storedLikes));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_LIKES_KEY, JSON.stringify(likes));
	}, [likes]);

	const handleLike = postId => {
		setLikes(prev => {
			const currentLike = prev[postId] || { count: 0, liked: false };
			const liked = currentLike.liked;
			const newCount = liked ? currentLike.count - 1 : currentLike.count + 1;
			return {
				...prev,
				[postId]: { count: newCount, liked: !liked },
			};
		});

		if (likes[postId]?.liked) {
			unlikePostMutation.mutate(postId);
		} else {
			likePostMutation.mutate(postId);
		}
	};

	const handleCommentClick = postId => {
		setShowCommentInput(prev => ({
			...prev,
			[postId]: !prev[postId],
		}));
		if (!showCommentInput[postId]) {
			setCommentInputs(prev => ({ ...prev, [postId]: '' }));
		}
	};

	const handleCommentChange = (postId, value) => {
		setCommentInputs(prev => ({ ...prev, [postId]: value }));
	};

	const handleCommentSubmit = postId => {
		if (commentInputs[postId]) {
			setComments(prev => ({
				...prev,
				[postId]: [...prev[postId], commentInputs[postId]],
			}));
			setCommentCounts(prev => ({
				...prev,
				[postId]: prev[postId] + 1,
			}));

			addCommentMutation.mutate({ postId, content: commentInputs[postId] });
			setCommentInputs(prev => ({ ...prev, [postId]: '' }));
		}
	};

	const handleMenuToggle = postId => {
		setShowMenu(prev => (prev === postId ? null : postId));
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
				console.log(showMenu);
				if (showMenu) {
					deletePost(showMenu);
				}
				setShowMenu(null);
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

	const handlePostClick = postId => {
		navigate(`/home/detailPost/${postId}`);
	};

	return (
		<S.PostContainer>
			<S.PostList>
				{boardList?.posts.map(post => (
					<div key={post.postId} onClick={() => handlePostClick(post.postId)}>
						<PostItem
							post={post}
							likes={likes}
							onLike={handleLike}
							onCommentClick={handleCommentClick}
							commentCounts={commentCounts}
							comments={comments}
							showCommentInput={showCommentInput}
							handleMenuToggle={handleMenuToggle}
							showMenu={showMenu}
							handleMouseLeave={handleMouseLeave}
							menuItems={menuItems}
							commentInputs={commentInputs}
							handleCommentChange={handleCommentChange}
							handleCommentSubmit={handleCommentSubmit}
						/>
					</div>
				))}
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
