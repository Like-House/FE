import { styled } from 'styled-components';
import theme from '@/theme/theme';

const MyContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 7px 0;

	img {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		object-fit: cover;
	}
`;

const MyMessage = styled.div`
	background-color: ${theme.COLOR.MAIN.YELLOW};
	max-width: 300px;
	width: fit-content;
	border-radius: 18px;
	padding: 10px 15px;
`;

export { MyContainer, MyMessage };
