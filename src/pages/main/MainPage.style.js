import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

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

export {
	PostContainer,
	PostList,
	RightSidebar,
	CalendarWrapper,
	AlbumWrapper,
};
