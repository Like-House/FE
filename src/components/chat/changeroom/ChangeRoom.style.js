import styled from 'styled-components';

import { FONT_SIZE } from '@/constants';
import theme from '@/theme/theme';

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 60px 80px;

	h1 {
		font-size: ${FONT_SIZE.LG};
		font-weight: 400;
		margin-bottom: 100px;
	}

	span {
		font-size: ${FONT_SIZE.SM};
		opacity: 0.4;
		font-weight: bold;

		&:hover {
			cursor: pointer;
			opacity: 1;
			text-decoration: underline;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 80%;
		height: 100%;
		padding: 50px 25px 0 25px;

		h1 {
			margin-bottom: 20px;
		}
	}
`;

const ContentWrapper = styled.div`
	p {
		margin-bottom: 40px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		p {
			font-size: ${FONT_SIZE.SM};
		}
	}
`;

const CoverImgWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 40px;

	img {
		width: 200px;
		height: 200px;
		margin-right: 20px;
	}

	label {
		${theme.ALIGN.ROW_CENTER};
		background-color: ${theme.COLOR.YELLOW.YELLOW_200};
		border-radius: 10px;
		padding: 15px 20px;
		font-size: ${FONT_SIZE.SM};
		cursor: pointer;
		word-break: keep-all;
		&:hover {
			transform: scale(0.98);
		}

		svg {
			margin-left: 25px;
		}
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		img {
			width: 150px;
			height: 150px;
		}

		label {
			padding: 15px;
		}
	}
`;

const ButtonBox = styled.div`
	position: absolute;
	right: 50px;
	bottom: 50px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		bottom: 110px;
		right: 40px;
	}
`;

const FileInput = styled.input`
	display: none;
`;

export { Container, ContentWrapper, CoverImgWrapper, ButtonBox, FileInput };
