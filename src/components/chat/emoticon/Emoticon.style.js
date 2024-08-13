import theme from '@/theme/theme';
import { styled } from 'styled-components';

const Container = styled.div`
	img {
		margin: 5px;
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
		cursor: pointer;

		&:hover {
			border: 1px solid ${theme.COLOR.BACKGROUND.WHITE};
		}
	}
`;

export { Container };
