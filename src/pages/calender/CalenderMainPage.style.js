import styled from 'styled-components';
import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		height: 100dvh;
	}
`;

const Schedule = styled.div`
	height: 100%;
	min-width: 820px;
	width: 70%;
	padding-top: 10px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

	@media ${theme.WINDOW_SIZE.PC} {
		min-width: 510px;
		width: 100%;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		min-width: 0;
	}
`;

const Calender = styled.div`
	width: 100%;
	height: fit-content;
	${theme.ALIGN.ROW_CENTER};
	position: relative;
`;

const Button = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;

	button {
		width: 45px;
		height: 45px;
	}

	svg {
		color: ${theme.COLOR.COMMON.WHITE};
		width: 20px;
		height: 20px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		button {
			width: 30px;
			height: 30px;
		}

		svg {
			width: 13px;
			height: 13px;
		}
	}
`;

const ScheduleList = styled.div`
	margin: 40px;
	${theme.ALIGN.COLUMN_CENTER};

	ul {
		height: 300px;
		max-width: 900px;
		width: 100%;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 4px;
		}

		&::-webkit-scrollbar-thumb {
			background: ${theme.COLOR.MAIN.YELLOW};
			border-radius: 40px;
		}
	}

	li {
		background-color: ${theme.COLOR.COMMON.WHITE};
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 20px;

		display: flex;
		position: relative;
		width: 100%;

		&:hover {
			cursor: pointer;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		li {
			padding: 10px;
		}

		ul {
			height: 250px;
		}
	}
`;

const PopOver = styled.div``;

const RightSidebar = styled.div`
	min-width: 260px;
	flex: 1;
	padding: 50px;
	word-break: keep-all;

	h2 {
		min-width: 260px;
		font-weight: 400;
		padding-left: 3px;
		margin-bottom: 30px;
	}

	li {
		background-color: ${theme.COLOR.COMMON.WHITE};
		border-radius: 10px;
		padding: 20px;
		margin: 15px 0;

		&:hover {
			cursor: pointer;
		}

		strong {
			margin-right: 10px;
		}
	}

	@media ${theme.WINDOW_SIZE.PC} {
		display: none;
	}
`;

const ScheduleWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const ScheduleBox = styled.div`
	padding: 10px 0;
	width: 300px;

	div {
		margin-top: 5px;
		font-weight: bold;
		font-size: ${FONT_SIZE.BASE};
		margin-bottom: 3px;
	}

	p {
		font-size: ${FONT_SIZE.XS};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 150px;

		div {
			font-size: ${FONT_SIZE.BASE};
		}

		p {
			font-size: ${FONT_SIZE.SM};
		}
	}
`;

const Content = styled.div`
	display: flex;
	margin-top: 15px;

	p {
		font-size: ${FONT_SIZE.SM};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
	}

	div {
		padding: 0;
		padding-right: 10px;
	}
`;

const MonthWrapper = styled.div`
	min-width: 260px;
	width: 100%;
	height: 95%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export {
	Container,
	Schedule,
	Calender,
	Button,
	ScheduleList,
	PopOver,
	RightSidebar,
	ScheduleWrapper,
	ScheduleBox,
	Content,
	MonthWrapper,
};
