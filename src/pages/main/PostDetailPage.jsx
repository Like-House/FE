import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import * as S from './PostDetailPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import useGetPostById from '@/hooks/queries/posts/useGetPostById';
import PostItem from '@/components/home/PostItem';
import Comment from '@/components/post/Comment';
import useGetProfile from '@/hooks/queries/user/useGetProfile';
import useGetUserImg from '@/hooks/queries/user/useGetUserImg';
import { Avatar } from '@/components';
import { useState } from 'react';
import useAddComment from '@/hooks/queries/comment/useAddComment';
import { PAGE_PATH } from '@/constants';

const PostDetailPage = () => {
	const { postId } = useParams();
	const [input, setInput] = useState('');
	const nav = useNavigate();

	const { data } = useGetPostById(postId);
	const { data: profile } = useGetProfile();
	const { data: userImg } = useGetUserImg(profile?.imageKeyName);
	const { mutate } = useAddComment(postId);

	const handleSubmit = e => {
		e.preventDefault();
		mutate({ postId, content: input, parentId: null });
		setInput('');
	};

	return (
		<S.PostContainer>
			<S.PostList>
				{data && <PostItem post={data} />}
				<S.CommentInput onSubmit={handleSubmit}>
					<S.Profile>
						<Avatar src={userImg?.url} />
					</S.Profile>
					<input
						type="text"
						value={input}
						placeholder="댓글을 입력하세요"
						onChange={e => setInput(e.target.value)}
					/>
					<button disabled={input === ''} onSubmit={handleSubmit}>
						댓글 달기
					</button>
				</S.CommentInput>
				<S.CommentWrapper>
					{data?.comments.map(e => (
						<Comment comment={e} key={e.commentId} />
					))}
				</S.CommentWrapper>
			</S.PostList>
			<S.RightSidebar>
				<S.CalendarWrapper>
					<CustomCalendar size="BASE" hasBackgroundColor={true} />
				</S.CalendarWrapper>
				<S.AlbumWrapper
					onClick={() => nav(`${PAGE_PATH.HOME}/${PAGE_PATH.PHOTO}`)}
				>
					<h2>가족 앨범 보기</h2>
					<p>가족과의 소중한 추억을 앨범으로 확인하세요</p>
				</S.AlbumWrapper>
			</S.RightSidebar>
		</S.PostContainer>
	);
};

export default PostDetailPage;
