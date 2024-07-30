import styled from 'styled-components';
import theme from '../../../../theme/theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../../../constants';

const AlertConatainer = styled.div`
	${theme.ALIGN.ROW_CENTER};
	justify-content: space-between;
	width: 100%;
	padding: 30px 40px;
	border-radius: 20px;
	cursor: pointer;
	&:hover {
		background-color: ${theme.COLOR.COMMON.WHITE};
	}

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		padding: 20px 10px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		padding: 12px 10px;
	}
`;

const AlertContent = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	flex-direction: row;
`;

const AlertInformation = styled.div`
	margin-left: 20px;
`;

const AlertSender = styled.div`
	font-size: ${FONT_SIZE.XL};

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		font-size: ${FONT_SIZE.LG};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.BASE};
	}
`;

const AlertMessage = styled.div`
	font-size: ${FONT_SIZE.LG};

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		font-size: ${FONT_SIZE.BASE};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.SM};
	}
`;

const AlertDate = styled.div`
	font-size: ${FONT_SIZE.BASE};
	color: ${theme.COLOR.GRAY.GRAY_450};

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		font-size: ${FONT_SIZE.SM};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		font-size: ${FONT_SIZE.XS};
	}
`;

const AlertIcon = styled.div`
	> img {
		width: 28px;
		height: 28px;
	}

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		> img {
			width: 24px;
			height: 24px;
		}
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		> img {
			width: 20px;
			height: 20px;
		}
	}
`;

export {
	AlertConatainer,
	AlertContent,
	AlertInformation,
	AlertSender,
	AlertMessage,
	AlertDate,
	AlertIcon,
};
