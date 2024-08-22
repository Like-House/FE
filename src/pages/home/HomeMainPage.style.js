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

	&::-webkit-scrollbar {
		display: none;
	}
`;

const RightSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	gap: 30px;
	padding: 30px;
	padding-left: 10px;
	background: transparent;

	@media ${theme.WINDOW_SIZE.PC} {
		display: none;
	}
`;

const CalendarWrapper = styled.div`
	div {
		max-width: 300px;
	}
`;

const AlbumWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	height: 200px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 20px;
	padding: 40px;

	p {
		margin-top: auto;
		align-self: end;
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
