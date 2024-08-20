import styled from 'styled-components';
import theme from '@/theme/theme';

const PostContainer = styled.div`
	display: flex;
	padding: 50px;
	background-color: #fafafa;
`;

const PostList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1200px;
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
	height: 30%;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 20px;
	padding: 40px;

	p {
		width: 250px;
		padding: 120px 0 0 130px;
	}
`;

const CommentWrapper = styled.div``;

const CommentInput = styled.form`
	padding-top: 30px;
	display: flex;
	align-items: center;

	input {
		border: none;
		background-color: ${theme.COLOR.BACKGROUND.WHITE};
		width: 400px;

		&:focus {
			border: none;
			outline: none;
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
