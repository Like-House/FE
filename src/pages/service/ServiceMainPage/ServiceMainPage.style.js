import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const { COLOR } = theme;

const Container = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	width: 100%;
`;

const Title = styled.h1`
	font-size: ${FONT_SIZE.TWO_XL};
	margin-bottom: 90px;
	${theme.ALIGN.ROW_CENTER};

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.XL};
		margin-bottom: 50px;
	}
`;

const Content = styled.div`
	width: 100%;
	${theme.ALIGN.ROW_CENTER};
	gap: 20px;
	margin-bottom: 30px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: column;
		gap: 10px;
	}
`;

const InviteSection = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	min-width: 395px;
	width: 48%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		min-width: 330px;
		max-width: 400px;
		width: 90%;
	}
`;

const InviteTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 20px;
	text-align: left;
	font-weight: 400;
	width: 100%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-bottom: 10px;
	}
`;

const CreateSection = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	min-width: 395px;
	width: 48%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		min-width: 330px;
		max-width: 400px;
		width: 90%;
	}
`;

const CreateTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-bottom: 20px;
	text-align: left;
	font-weight: 400;
	width: 100%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-bottom: 10px;
	}
`;

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	background-color: ${props => props.$bgColor || COLOR.COMMON.WHITE};
	border-radius: 10px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	width: 100%;
	height: 240px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		background-color: ${theme.COLOR.MAIN.YELLOW};
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

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 150px;
	}
`;

const PictureContainer = styled.div`
	margin-right: 50px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		${theme.ALIGN.ROW_CENTER};
		width: 120px;
		height: 120px;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 10px;
		margin-right: 30px;
	}
`;

const Picture = styled.img`
	width: 130px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 80px;
	}
`;

const PictureEnter = styled(Picture)`
	width: 160px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 100px;
	}
`;

const Button = styled.div`
	button {
		padding: 15px 20px;
		background-color: ${props =>
			props.$bgColor === COLOR.COMMON.WHITE
				? COLOR.MAIN.YELLOW
				: COLOR.COMMON.WHITE};

		@media ${theme.WINDOW_SIZE.MOBILE} {
			white-space: nowrap;
			background-color: white;
		}
	}
	svg {
		margin-left: 8px;
	}
`;

const CardTitle = styled.h3`
	font-size: ${FONT_SIZE.LG};
	margin-bottom: 40px;
	white-space: nowrap;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		padding-left: 1px;
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

	button {
		padding: 16px 30px;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	}
`;

const SubTitle = styled.h2`
	font-size: ${FONT_SIZE.SM};
	margin-top: 40px;
	margin-bottom: 25px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

const HelpSection = styled.div`
	width: 100%;
	margin-top: 50px;
	text-align: left;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 90%;
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

const ContentContainer = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	max-width: 1000px;
	width: 100%;
	padding-top: 50px;
`;

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
	ContentContainer,
	PictureEnter,
};
