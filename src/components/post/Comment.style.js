import { FONT_SIZE } from '@/constants';
import theme from '@/theme/theme';
import { styled } from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100%;
	margin-top: 40px;
`;

const Board = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
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

const Profile = styled.div`
	display: flex;
	flex-direction: row;
	width: 110px;
`;

const CommentEditInput = styled.input`
	outline: none;
	padding: 10px;
	border: none;
	background: transparent;
`;

const CommentInputContainer = styled.form`
	display: flex;
	flex-direction: row;
`;

export {
	Container,
	Board,
	PostHeader,
	AuthorWrapper,
	Author,
	DateTime,
	MenuButton,
	Popover,
	Profile,
	CommentEditInput,
	CommentInputContainer,
};
