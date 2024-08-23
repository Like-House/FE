import styled from 'styled-components';

import theme from '@/theme/theme';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 700px;
	width: 100%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		overflow-x: hidden;
		min-width: 0;
	}
`;

const Content = styled.div`
	${theme.ALIGN.ROW_CENTER};
	min-width: 600px;
	width: 80%;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		min-width: 0px;
	}
`;

const Wrapper = styled.div`
	padding-top: 50px;
	${theme.ALIGN.COLUMN_CENTER};
	width: 100%;

	h2 {
		width: 80%;
		text-align: start;
		padding-bottom: 30px;
		padding-left: 5px;
	}
`;

const Form = styled.form`
	padding: 40px 50px 40px;
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;

	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 10px;

	label {
		padding-bottom: 10px;
	}

	input {
		border: none;
		margin-bottom: 30px;
		width: 300px;
		outline: none;
	}

	textarea {
		width: 500px;
		border: none;
		height: 200px;
		outline: none;
		resize: none;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 40px 50px 100px;

		input {
			width: 100%;
		}

		textarea {
			width: 100%;
			height: 100px;
		}
	}
`;

const Type = styled.div`
	width: 100%;
	height: 200px;
	margin-bottom: 20px;

	div {
		padding: 0px;
		width: 300px;
		div {
			width: 100%;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		div {
			width: 100%;
		}
	}
`;

const Button = styled.div`
	position: absolute;
	bottom: 30px;
	right: 30px;

	button {
		width: 50px;
		height: 50px;

		img {
			width: 20px;
			height: 20px;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		position: absolute;
		bottom: 5px;
		right: 10px;
		margin: 10px;

		button {
			width: 40px;
			height: 40px;

			img {
				width: 15px;
				height: 15px;
			}
		}
	}
`;

export { Container, Wrapper, Content, Button, Form, Type };
