import styled from 'styled-components';
import { FONT_SIZE } from '../../../constants';
import theme from '../../../theme/theme';

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
	width: 1028px;
	height: 550px;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 34px;
	display: flex;
	flex-direction: column;
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	padding: 46px 82px 0 0;
`;

const ModalFooter = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	padding: 0 84px 100px 0;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	overflow-y: auto;
	margin-top: 4px;
	padding: 0 64px;
`;

const ProfileArea = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 26px;
`;

const Profile = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 100%;
`;

const Content = styled.div`
	width: 90%;
	height: 100%;
`;

const OP = styled.div`
	font-size: ${FONT_SIZE.TWO_XL};
	font-weight: 600;
`;

const Date = styled.div`
	color: ${theme.COLOR.GRAY.GRAY_750};
	margin-bottom: 26px;
`;

const Comment = styled.div`
	margin-bottom: 20px;
	font-size: ${FONT_SIZE.TWO_XL};
`;

const PostImg = styled.img`
	width: 40%;
	border-radius: 12px;
	object-fit: cover;
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
