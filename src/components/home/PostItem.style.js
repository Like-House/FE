import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

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
	max-width: 700px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: flex;
		justify-content: center;
		width: 500px;
	}
`;

const PostWrapper = styled.div`
	display: flex;
	width: 100%;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: row;
	width: 110px;
`;

const Board = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-left: 10px;}
`;

const Divider = styled.hr`
	width: 99%;
	border: none;
	border-top: 1px solid #ddd;
	margin: 40px 0 5px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100%;
	}
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

	svg {
		cursor: pointer;
	}
`;

const Popover = styled.div`
	position: absolute;
	top: 100%;
	right: 0%;
	z-index: 10;
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
	max-width: 500px;

	cursor: pointer;
`;

const Photo = styled.img`
	width: 500px;
	border-radius: 10px;
	margin-bottom: 10px;

	cursor: pointer;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 400px;}
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

const CommentContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 700px;
`;

const CommentInput = styled.div`
	padding-top: 30px;
	display: flex;
	align-items: center;

	input {
		border: none;
		background-color: ${theme.COLOR.BACKGROUND.WHITE};
		width: 400px;
	}

	input:focus {
		border: none;
		outline: none;
	}

	button {
		width: 110px;
		height: 40px;
		border: none;
		border-radius: 10px;
		background-color: ${theme.COLOR.YELLOW.YELLOW_300};
		cursor: pointer;
	}
`;

const CommentWrapper = styled.div`
	display: flex;
	width: 100%;

	margin-top: 40px;
`;

export {
	PostItem,
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
	PostHeader,
	Menu,
	MenuButton,
	Popover,
	MenuItem,
	CommentContainer,
	CommentInput,
	CommentWrapper,
};
