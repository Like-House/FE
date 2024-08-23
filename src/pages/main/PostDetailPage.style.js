import styled from 'styled-components';
import theme from '@/theme/theme';

const PostContainer = styled.div`
	display: flex;
	padding: 50px;
	background-color: #fafafa;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: flex;
		justify-content: center;
		padding: 0 0 80px 0;
	}
`;

const PostList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1200px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100%;
	}
`;

const RightSidebar = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
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
	display: flex;
	flex-direction: column;
	cursor: pointer;
	height: 200px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 20px;
	padding: 40px;

	max-width: 300px;

	p {
		margin-top: auto;
		align-self: end;
	}
`;

const CommentWrapper = styled.div`
	width: 620px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 330px;
	}
`;

const CommentInput = styled.form`
	padding-top: 30px;
	display: flex;
	align-items: center;
	width: 620px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 330px;
	}

	input {
		border: none;
		background-color: ${theme.COLOR.BACKGROUND.WHITE};
		width: 100%;

		&:focus {
			border: none;
			outline: none;
		}

		@media ${theme.WINDOW_SIZE.MOBILE} {
			width: 300px;
		}
	}

	button {
		width: 110px;
		height: 40px;
		border: none;
		border-radius: 10px;
		background-color: ${theme.COLOR.YELLOW.YELLOW_300};
		cursor: pointer;

		&:disabled {
			background-color: ${theme.COLOR.GRAY.GRAY_100};
			cursor: not-allowed;
		}

		@media ${theme.WINDOW_SIZE.MOBILE} {
			font-size: 12px;
			width: 100px;
		}
	}
`;

const Profile = styled.div`
	display: flex;
	flex-direction: row;
	width: 110px;
`;

export {
	PostContainer,
	PostList,
	RightSidebar,
	CalendarWrapper,
	AlbumWrapper,
	CommentWrapper,
	CommentInput,
	Profile,
};
