import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants/size';

const { COLOR } = theme;

const Container = styled.div`
	padding: 50px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 20px;
	}
`;

const Title = styled.h1`
	font-size: ${FONT_SIZE.TWO_XL};
	margin-bottom: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.XL};
		margin-bottom: 30px;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-bottom: 30px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: column;
		gap: 10px;
	}
`;

const InviteSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 45%;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100%;
	}
`;

const InviteTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 20px;
	text-align: left;
	width: 100%;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		margin-bottom: 10px;
	}
`;

const CreateSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 45%;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100%;
	}
`;

const CreateTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 20px;
	text-align: left;
	width: 100%;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		margin-bottom: 10px;
	}
`;

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 60px;
	background-color: ${props => props.bgColor || COLOR.COMMON.WHITE};
	border-radius: 10px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	width: 100%;
	height: 300px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: #ffe793;
		padding: 20px;
		height: auto;
		margin-bottom: 30px;
	}
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
`;

const PictureContainer = styled.div`
	border-radius: 10px;
	padding: 20px;
	margin-right: 30px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: #fff1be;
		margin-right: 10px;
	}
`;

const Picture = styled.img`
	width: 150px;
	height: 150px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 80px;
		height: 80px;
	}
`;

const Button = styled.div`
	button {
		background-color: ${props =>
			props.bgColor === COLOR.COMMON.WHITE
				? COLOR.MAIN.YELLOW
				: COLOR.COMMON.WHITE};

		@media ${theme.WINDOW_SIZE.MOBILE} {
			white-space: nowrap;
			background-color: white;
		}
	}
	svg {
		margin-left: 10px;
	}
`;

const CardTitle = styled.h3`
	font-size: ${FONT_SIZE.XL};
	margin-bottom: 40px;
	white-space: nowrap;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		margin-bottom: 20px;
	}
`;

const SubContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 70px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-bottom: 30px;
	}
`;

const SubTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-top: 40px;
	margin-bottom: 25px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		margin-top: -20px;
		margin-bottom: 10px;
	}
`;

const HelpSection = styled.div`
	margin-top: 50px;
	text-align: left;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-top: 20px;
	}
`;

const HelpContent = styled.div`
	display: flex;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const HelpTitle = styled.h2`
	font-size: ${FONT_SIZE.TWO_XL};
	padding-right: 15px;
	margin-bottom: 3px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.XL};
		padding-right: 0;
	}
`;

const HelpExplain = styled.div`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 3px;
	padding-top: 10px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
	}
`;

const HelpList = styled.ul`
	list-style-type: none;
	padding: 0;
	border-top: 2px solid ${COLOR.COMMON.BLACK};
	margin-top: 25px;
	padding-top: 25px;
`;

const HelpMain = styled.li`
	font-size: ${FONT_SIZE.BASE};
	margin-bottom: 10px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.SM};
	}
`;

const HelpItem = styled.li`
	font-size: ${FONT_SIZE.BASE};
	font-weight: bold;
	margin-bottom: 30px;
	padding-bottom: 30px;
	border-bottom: 1px solid ${COLOR.GRAY.GRAY_200};
	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.SM};
		margin-bottom: 10px;
		padding-bottom: 10px;
	}
`;

const BgColor = {
	YELLOW: COLOR.MAIN.YELLOW,
	WHITE: COLOR.COMMON.WHITE,
};

export {
	Container,
	Title,
	Content,
	InviteSection,
	InviteTitle,
	CreateSection,
	CreateTitle,
	Card,
	CardContent,
	PictureContainer,
	Picture,
	Button,
	CardTitle,
	SubContent,
	SubTitle,
	HelpContent,
	HelpExplain,
	HelpSection,
	HelpTitle,
	HelpList,
	HelpMain,
	HelpItem,
	BgColor,
};
