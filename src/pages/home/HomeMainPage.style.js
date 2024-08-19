import styled from 'styled-components';
import theme from '@/theme/theme';

const PostContainer = styled.div`
	display: flex;
	background-color: #fafafa;
	height: 100vh;
`;

const PostList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1000px;
	height: 100%;
	overflow-y: scroll;
`;

const RightSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	gap: 30px;
	padding: 20px 0 0 50px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const CalendarWrapper = styled.div`
	div {
		max-width: 300px;
	}
`;

const AlbumWrapper = styled.div`
	cursor: pointer;
	height: 30%;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 20px;
	padding: 40px;

	p {
		width: 250px;
		padding: 120px 0 0 130px;
	}
`;

export { PostContainer, PostList, RightSidebar, CalendarWrapper, AlbumWrapper };
