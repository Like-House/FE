import * as S from './HomeMainPage.style';

import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import useFamilySpaceId from '@/hooks/useFamilySpaceId';
import useGetPosts from '@/hooks/queries/posts/useGetPosts';
import PostItem from '@/components/home/PostItem';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '@/constants';

const HomeMainPage = () => {
	const nav = useNavigate();
	const { data } = useFamilySpaceId();
	const {
		data: boardList,
		isFetching,
		hasNextPage,
		fetchNextPage,
	} = useGetPosts({
		familySpaceId: data?.familySpaceId,
		size: 5,
	});

	const { ref, inView } = useInView({
		threshold: 0,
		delay: 0,
	});

	useEffect(() => {
		if (inView) {
			!isFetching && hasNextPage && fetchNextPage();
		}
	}, [inView, isFetching, hasNextPage]);

	console.log(boardList);

	return (
		<S.PostContainer>
			<S.PostList>
				{boardList?.map(page =>
					page?.result.posts.map(e => <PostItem post={e} key={e.postId} />),
				)}
				<S.RefBox ref={ref}>ref</S.RefBox>
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

export default HomeMainPage;
