import theme from '@/theme/theme';
import { styled } from 'styled-components';

const Container = styled.div`
	position: relative;
	img {
		margin: 10px;
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
		cursor: pointer;

		&:hover {
			border: 1px solid ${theme.COLOR.BACKGROUND.WHITE};
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		img {
			width: 80px;
			height: 80px;
		}
	}
`;

const deleteIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: ${({ $deleteState }) => ($deleteState ? 'flex' : 'none')};
	color: ${theme.COLOR.GRAY.GRAY_450};
	cursor: pointer;

	svg {
		&:hover {
			color: ${theme.COLOR.GRAY.GRAY_1000};
		}
	}
`;

export { Container, deleteIcon };
