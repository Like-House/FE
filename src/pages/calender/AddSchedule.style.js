import styled from 'styled-components';
import theme from '../../theme/theme';

const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100vh;

	margin: 50px 70px;
	gap: 30px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin: 45px;
		height: 70vh;
	}
`;

const Content = styled.div`
	display: flex;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	background-color: white;
	border-radius: 10px;

	padding: 40px 60px;

	width: 80%;
	gap: 20px;

	input {
		border: none;
		margin-bottom: 30px;
		width: 400px;
		outline: none;
	}

	textarea {
		border: none;
		width: 500px;
		height: 100px;
		outline: none;
		resize: none;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 40px;

		input {
			width: 250px;
		}

		textarea {
			width: 250px;
		}
	}
`;

const Type = styled.div`
	width: 500px;
	height: 250px;

	margin-bottom: 20px;
`;

const Button = styled.div`
	position: absolute;
	bottom: 70px;
	right: 50px;
	margin-top: auto;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		position: absolute;
		top: 10px;
		right: 10px;
		margin: 10px;
	}
`;

export { Container, Content, Button, Form, Type };
