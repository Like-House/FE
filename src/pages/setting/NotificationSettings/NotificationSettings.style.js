import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '@/constants/size';

const { COLOR } = theme;

const Container = styled.div`
	padding: 50px;
	background-color: ${COLOR.BACKGROUND.WHITE};
	height: 100vh;

	@media ${RESPONSIVE_SIZE.TABLET} {
		padding: 20px;
	}
`;

const Title = styled.h2`
	margin-bottom: 50px;
	font-size: ${FONT_SIZE.XL};

	@media ${RESPONSIVE_SIZE.TABLET} {
		font-size: ${FONT_SIZE.LG};
	}
`;

const NotificationItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 45px;
	justify-content: space-between;

	@media ${RESPONSIVE_SIZE.TABLET} {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 30px;
		gap: 10px;
	}
`;

const Label = styled.div`
	flex: 1;
	font-size: ${FONT_SIZE.LG};
	margin-bottom: 10px;

	@media ${RESPONSIVE_SIZE.TABLET} {
		font-size: ${FONT_SIZE.BASE};
	}
`;

const LabelBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;

	@media ${RESPONSIVE_SIZE.TABLET} {
		margin-right: 0;
	}
`;

const Description = styled.div`
	flex: 2;
	font-size: ${FONT_SIZE.BASE};

	@media ${RESPONSIVE_SIZE.TABLET} {
		font-size: ${FONT_SIZE.SM};
	}
`;

export { Container, Title, NotificationItem, Label, LabelBox, Description };
