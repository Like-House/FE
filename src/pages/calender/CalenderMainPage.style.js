import styled from 'styled-components';
import theme from '@/theme/theme';

const Container = styled.div`
	display: flex;
	height: 100vh;
	margin: 20px;
`;

const Schedule = styled.div`
	flex: 5;

	padding-top: 10px;
	border-right: 1px solid #e0e0e0;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		border-right: none;
	}
`;

const Calender = styled.div`
	${theme.ALIGN.ROW_CENTER};
	height: 50%;
	position: relative;
`;

const Button = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	margin: 10px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		botton: auto;
		top: 0px;
		right: 0px;
		margin: 0px;
	}
`;

const ScheduleList = styled.div`
	margin: 40px;
	height: 400px;

	ul {
		list-style-type: none;
		padding: 0px;
	}

	li {
		background-color: ${theme.COLOR.COMMON.WHITE};
		border-radius: 10px;
		padding: 20px;
		transition: background-color 0.3s;
		margin-bottom: 20px;

		display: flex;
		position: relative;

		p {
			font-size: 14px;
			margin: 5px 0;
		}

		&:hover {
			cursor: pointer;
		}

		strong {
			font-size: 1.2em;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
	}
`;

const PopOver = styled.div``;

const RightSidebar = styled.div`
	flex: 1;
	margin: 50px;

	ul {
		list-style-type: none;
		padding-top: 40px;
	}

	li {
		background-color: white;
		border-radius: 10px;
		padding: 20px;
		transition: background-color 0.3s;
		margin-bottom: 20px;
		font-size: 12px;

		p {
			font-size: 12px;
			margin: 10px 0 0;
		}

		&:hover {
			cursor: pointer;
		}

		strong {
			font-size: 1.5em;
			color: #333;
			padding-right: 10px;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
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
};
