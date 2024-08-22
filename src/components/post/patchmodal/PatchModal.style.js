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
	margin-top: 30px;
	padding: 0 64px;

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		padding: 0 16px;
	}
`;

const ProfileArea = styled.div`
	padding: 0 64px;
	display: flex;
	align-items: center;

	img {
		margin-right: 10px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 0 16px;
	}
`;

const Content = styled.div`
	width: 100%;
	height: auto;
`;

const Comment = styled.input`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 10px;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.XL};
	}
`;

const PostImg = styled.img`
	width: 40%;
	border-radius: 12px;
	object-fit: cover;

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		width: 100%;
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
`;

const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export {
	Backdrop,
	ModalContainer,
	ModalHeader,
	ModalFooter,
	ContentContainer,
	ProfileArea,
	Content,
	Comment,
	CloseButton,
	PostImg,
	Button,
	PostContainer,
};
