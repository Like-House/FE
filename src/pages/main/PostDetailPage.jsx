import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import * as S from './PostDetailPage.style';
import { useParams } from 'react-router-dom';
import useGetPostById from '@/hooks/queries/posts/useGetPostById';
import PostItem from '@/components/home/PostItem';
import Comment from '@/components/post/Comment';

const PostDetailPage = () => {
	const { postId } = useParams();
	const { data } = useGetPostById(postId);

	return (
		<S.PostContainer>
			<S.PostList>
				{data && <PostItem post={data} />}
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
				<S.AlbumWrapper>
					<h2>가족 앨범 보기</h2>
					<p>가족과의 소중한 추억을 앨범으로 확인하세요</p>
				</S.AlbumWrapper>
			</S.RightSidebar>
		</S.PostContainer>
	);
};

export default PostDetailPage;
