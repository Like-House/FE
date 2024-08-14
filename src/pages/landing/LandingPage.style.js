import styled from 'styled-components';

import { FONT_SIZE } from '@/constants';
import theme from '@/theme/theme';

const Container = styled.div`
	position: relative;
	width: 100%;
	${theme.ALIGN.ROW_CENTER};

	h1 {
		font-size: ${FONT_SIZE.FOUR_XL};
		word-break: keep-all;

		@media ${theme.WINDOW_SIZE.MOBILE} {
			font-size: ${FONT_SIZE.LG};
		}
	}
`;

const ContentContainer = styled.div`
	z-index: 1;
	max-width: 1300px;
`;

const Content = styled.div`
	padding: 0px 150px;

	h1 {
		margin-top: 130px;
	}

	margin-bottom: 400px;
`;

const BackGround = styled.div`
	position: absolute;
	top: 100px;
	width: 100%;
	height: 1200px;
	background: linear-gradient(
		181deg,
		#fafafa 0.71%,
		#ffc933 55.59%,
		#fafafa 99.29%
	);

	@media ${theme.WINDOW_SIZE.MOBILE} {
		background: linear-gradient(
			181deg,
			#fff 0.71%,
			#ffc933 55.59%,
			#fff 99.29%
		);
	}
`;

const ContentWrapper = styled.div`
	margin-top: 300px;
	padding: 0px 150px;

	h3 {
		margin-bottom: 50px;
	}
`;

const ImgBox = styled.div`
	margin-top: 180px;
	${theme.ALIGN.ROW_CENTER};
	img {
		width: 80%;
		min-width: 400px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		img {
			width: 100%;
			min-width: 300px;
		}
	}
`;

const BackGround2 = styled(BackGround)`
	top: 1450px;
`;
const BackGround3 = styled(BackGround)`
	top: 2800px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: none;
	}
`;

export {
	Container,
	ContentContainer,
	BackGround,
	Content,
	ContentWrapper,
	ImgBox,
	BackGround2,
	BackGround3,
};
