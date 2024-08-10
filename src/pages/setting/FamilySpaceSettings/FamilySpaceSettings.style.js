import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

const FamilySpaceSettingsContainer = styled.div`
	padding: 50px;
	background-color: ${COLOR.BACKGROUND.WHITE};
	height: 100vh;
`;

const SettingsSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
`;

const Title = styled.h2`
	font-size: ${FONT_SIZE.LG};
	margin-bottom: 20px;
	color: ${COLOR.GRAY.GRAY_800};
`;

const DeleteContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
`;

const DeleteComment = styled.p`
	font-size: ${FONT_SIZE.BASE};
	color: ${COLOR.GRAY.GRAY_700};
`;

const InviteLinkInput = styled.input`
	flex: 1;
	padding: 8px;
	font-size: ${FONT_SIZE.SM};
	border: none;
	text-decoration: none;
	color: ${COLOR.GRAY.GRAY_900};
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	background-color: ${COLOR.COMMON.WHITE};
	padding: 8px;
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.02);
`;

const ExpirationNotice = styled.p`
	color: ${COLOR.GRAY.GRAY_200};
	font-size: ${FONT_SIZE.XS};
	margin-top: -15px;
	margin-left: 10px;
`;

const Icon = styled.img`
	width: 35px;
	height: 35px;
`;

const IconButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	margin-left: 10px;
`;

const CustomButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 30px;
	background-color: ${COLOR.YELLOW.YELLOW_1000};
	color: ${COLOR.COMMON.WHITE};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: ${FONT_SIZE.XS};
	white-space: nowrap;
	margin-bottom: 10px;

	&:hover {
		transform: scale(0.99);
	}

	&:disabled {
		cursor: not-allowed;
		transform: scale(1);
	}
`;

const CodeContent = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export {
	FamilySpaceSettingsContainer,
	SettingsSection,
	Title,
	DeleteContainer,
	DeleteComment,
	InviteLinkInput,
	Content,
	ExpirationNotice,
	Icon,
	IconButton,
	CustomButton,
	CodeContent,
};
