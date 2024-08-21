import styled from 'styled-components';
import theme from '@/theme/theme';

const PostContainer = styled.div`
	display: flex;
	background-color: #fafafa;
	height: 100vh;
	padding: 0 50px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 0;
	}
`;

const PostList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1200px;
	height: 100%;
	overflow-y: scroll;

	@media (max-width: 768px) {
		/* 화면 너비가 768px 이하일 때 */
		width: 90%;
		min-width: auto;
	}
	@media (max-width: 480px) {
		/* 화면 너비가 480px 이하일 때 */
		width: 100%;
		min-width: auto;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;

const RightSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	width: 350px;
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

	max-width: 300px;

	p {
		width: 250px;
		padding: 120px 0 0 130px;
	}
`;

const RefBox = styled.div`
	opacity: 0;
	height: 10px;
`;

export {
	PostContainer,
	PostList,
	RightSidebar,
	CalendarWrapper,
	AlbumWrapper,
	RefBox,
};
