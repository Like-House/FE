import styled from 'styled-components';

import { FONT_SIZE, RESPONSIVE_SIZE } from '@/constants';
import theme from '@/theme/theme';

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;

const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 60%;
	aspect-ratio: 9/5;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 34px;
	display: flex;
	flex-direction: column;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		width: 600px;
		height: 300px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 90%;
		height: auto;
		aspect-ratio: auto;
	}
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	padding: 3% 6% 0 0;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 5% 5% 0 0;
	}
`;

const ModalFooter = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	padding: 0 6% 10% 0;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 0 16px 24px 0;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	overflow-y: auto;
	margin-top: 4px;
	padding: 0 64px;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		padding: 0 16px;
	}
`;

const ProfileArea = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 26px;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		margin-right: 18px;
		margin-left: 10px;
	}
`;

const Profile = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 100%;
`;

const Content = styled.div`
	width: 100%;
	height: auto;
`;

const OP = styled.div`
	font-size: ${FONT_SIZE.LG};
	font-weight: 600;
`;

const Date = styled.div`
	color: ${theme.COLOR.GRAY.GRAY_750};
	margin-bottom: 26px;
	font-size: ${FONT_SIZE.SM};
`;

const Comment = styled.div`
	margin-bottom: 20px;
	font-size: ${FONT_SIZE.BASE};

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: -webkit-box;
		word-wrap: break-word;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 90%;
	}
`;

const PostImg = styled.img`
	width: 40%;
	border-radius: 12px;
	object-fit: cover;
	margin-bottom: 20px;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 90%;
	}
`;

const CloseButton = styled.div`
	cursor: pointer;
`;

const Button = styled.button`
	width: 116px;
	height: 44px;
	border: none;
	border-radius: 10px;
	background-color: ${theme.COLOR.MAIN.YELLOW};
	cursor: pointer;
`;

export {
	Backdrop,
	ModalContainer,
	ModalHeader,
	ModalFooter,
	ContentContainer,
	ProfileArea,
	Profile,
	Content,
	OP,
	Date,
	Comment,
	CloseButton,
	PostImg,
	Button,
};
