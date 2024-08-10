import styled from 'styled-components';
import { FONT_SIZE } from '../../../constants/size';
import theme from '../../../theme/theme';

const { COLOR } = theme;

const Container = styled.div`
	padding: 50px;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	border-radius: 8px;
	background-color: ${COLOR.BACKGROUND.WHITE};
`;

const Heading = styled.h2`
	margin-bottom: 20px;
	font-size: ${FONT_SIZE.FOUR_XL};
`;

const Title = styled.div`
	margin-top: 50px;
	margin-bottom: 10px;
	font-size: ${FONT_SIZE.BASE};
`;

const ProfilePictureContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-bottom: 40px;
`;

const Button = styled.div`
	margin-bottom: 115px;
`;

const FileInput = styled.input`
	display: none;
`;

const Field = styled.div`
	margin-bottom: 20px;
`;

const Label = styled.div`
	font-size: ${FONT_SIZE.BASE};
	margin-bottom: 5px;
	color: ${COLOR.GRAY.GRAY_700};
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 170px;
`;

export {
	Container,
	Heading,
	Title,
	ProfilePictureContainer,
	Button,
	FileInput,
	Field,
	Label,
	ButtonContainer,
};
