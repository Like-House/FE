import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const Container = styled.div`
	padding: 50px;
	background-color: ${theme.COLOR.BACKGROUND.WHITE};
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: ${FONT_SIZE.XL};
	margin-bottom: 20px;
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin-top: 30px;
`;

const NewContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 70px;
	margin-bottom: 230px;
`;

const LabelContent = styled.div`
	margin-bottom: 30px;
`;

const Label = styled.label`
	font-size: ${FONT_SIZE.BASE};
	color: ${theme.COLOR.GRAY.GRAY_700};
`;

const Button = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export { Container, Title, Form, NewContent, LabelContent, Label, Button };
