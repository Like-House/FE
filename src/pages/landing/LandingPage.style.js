import styled from 'styled-components';

import { FONT_SIZE } from '@/constants';
import theme from '@/theme/theme';

const Container = styled.div`
	position: relative;
	width: 100%;
	${theme.ALIGN.ROW_CENTER};

	h1 {
		font-size: ${FONT_SIZE.FOUR_XL};
	}
`;

const ContentContainer = styled.div`
	z-index: 1;
	max-width: 1400px;
`;

const Content = styled.div`
	padding: 0px 150px;
	h1 {
		margin-top: 100px;
	}
`;

const BackGround = styled.div`
	position: absolute;
	top: 100px;
	width: 100%;
	height: 1300px;
	background: linear-gradient(
		181deg,
		#fafafa 0.71%,
		#ffc933 55.59%,
		#fafafa 99.29%
	);
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
		width: 90%;
	}
`;

export {
	Container,
	ContentContainer,
	BackGround,
	Content,
	ContentWrapper,
	ImgBox,
};
