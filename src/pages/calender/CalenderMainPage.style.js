import styled from 'styled-components';
import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const Schedule = styled.div`
	width: 75%;
	height: 100%;
	padding-top: 10px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

	@media ${theme.WINDOW_SIZE.MOBILE} {
		border-right: none;
	}
`;

const Calender = styled.div`
	width: 100%;
	height: fit-content;
	${theme.ALIGN.ROW_CENTER};
	position: relative;
`;

const Button = styled.div`
	position: absolute;
	bottom: 0;
	right: 10px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		botton: auto;
		top: 0px;
		right: 0px;
		margin: 0px;
	}

	button {
		width: 50px;
		height: 50px;
	}

	svg {
		color: ${theme.COLOR.COMMON.WHITE};
		width: 20px;
		height: 20px;
	}
`;

const ScheduleList = styled.div`
	margin: 40px;
	height: 400px;

	ul {
		list-style-type: none;
	}

	li {
		background-color: ${theme.COLOR.COMMON.WHITE};
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 20px;

		display: flex;
		position: relative;

		&:hover {
			cursor: pointer;
		}
	}
`;

const PopOver = styled.div``;

const RightSidebar = styled.div`
	flex: 1;
	margin: 50px;

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

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

const ScheduleWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const ScheduleBox = styled.div`
	padding: 10px 0;
	word-break: keep-all;

	div {
		margin-top: 10px;
		font-weight: bold;
		font-size: ${FONT_SIZE.XL};
		margin-bottom: 3px;
	}

	p {
		font-size: ${FONT_SIZE.SM};
	}
`;

const Content = styled.div`
	display: flex;
	margin-top: 15px;

	div {
		padding: 0;
		padding-right: 10px;
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
};
