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

const PostItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
	border-radius: 10px;
	padding: 40px;
	padding-bottom: 0px;

	gap: 30px;
	width: 100%;
`;

const PostWrapper = styled.div`
	display: flex;
	width: 100%;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: row;
	width: 90px;
`;

const Board = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
`;

const Divider = styled.hr`
	width: 99%;
	border: none;
	border-top: 1px solid #ddd;
	margin: 40px 0 5px;
`;

const PostHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	position: relative;
`;

const AuthorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Author = styled.div`
	font-weight: bold;
	font-size: 20px;
	margin: 5px 0 10px;
`;

const DateTime = styled.div`
	color: ${theme.COLOR.GRAY.GRAY_500};
	font-size: ${FONT_SIZE.XS};
`;

const MenuButton = styled.div`
	position: relative;

	button {
		background: none;
		border: none;
		font-size: ${FONT_SIZE.XL};
		cursor: pointer;
		margin-left: auto;
		position: relative;
	}
`;

const Popover = styled.div`
	position: absolute;
	top: 100%;
	right: 0%;
	z-index: 1;
`;

const Menu = styled.div`
	position: absolute;
	top: 30px;
	right: 0;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const MenuItem = styled.div`
	width: 80px;
	padding: 8px 15px;
	cursor: pointer;
	border-radius: 5px;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const Content = styled.div`
	margin-bottom: 13px;
	font-size: ${FONT_SIZE.BASE};
	width: 100%;
`;

const Photo = styled.img`
	width: 500px;
	border-radius: 10px;
	margin-bottom: 10px;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding-top: 10px;
	font-size: ${FONT_SIZE.SM};
	p {
		cursor: pointer;
	}
`;

const Comment = styled.div`
	margin: 30px 0 0 0;
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
	height: 50%;
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
	PostItem,
	PostHeader,
	PostWrapper,
	Profile,
	AuthorWrapper,
	Author,
	DateTime,
	Content,
	Photo,
	Board,
	Footer,
	Divider,
	Menu,
	MenuButton,
	Popover,
	MenuItem,
	Comment,
	RightSidebar,
	CalendarWrapper,
	AlbumWrapper,
};
